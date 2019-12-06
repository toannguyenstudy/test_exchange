import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import { RegisterPage } from '../register/register.page';
import { myEnterAnimation } from '../../animations/enter';
import { myLeaveAnimation } from '../../animations/leave';

import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    showPassword: boolean = false;
    showPasswordType: string = 'password';

    loginPage = null;
    ionBackdrop = null;

    loginForm: FormGroup;
    constructor(
        private modalController: ModalController,
        private alertController: AlertController,
        private translateService: TranslateService,
        private formBuilder: FormBuilder,
        private userService: UserService,
        private storage: Storage,
    ) {}

    get emailErrorMessage() {
        for (let err in this.loginForm.controls.email.errors) {
            if (err == 'required') {
                return this.translateService.instant(
                    'accountTab.loginPage.emailRequired',
                );
            }
            if (err == 'pattern') {
                return this.translateService.instant(
                    'accountTab.loginPage.emailInvalid',
                );
            }
        }
    }

    get passwordErrorMessage() {
        for (let err in this.loginForm.controls.password.errors) {
            if (err == 'required') {
                return this.translateService.instant(
                    'accountTab.loginPage.passwordRequired',
                );
            }
            if (err == 'minlength') {
                return this.translateService.instant(
                    'accountTab.loginPage.passwordMinlength',
                );
            }
        }
    }

    ngOnInit() {
        this.loginPage = document.getElementById('loginModal');
        this.ionBackdrop = document
            .getElementById('loginModal')
            .children.item(0);

        this.loginForm = this.formBuilder.group({
            email: [
                '',
                [
                    Validators.required,
                    Validators.pattern(
                        '^[a-z][a-z0-9_.]{2,32}@[a-z0-9]{2,}(.[a-z0-9]{2,4}){2,3}$',
                    ),
                ],
            ],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    handlePan(e) {
        this.loginPage.style.transform = `translateY(${e.center.y -
            ((document.body.clientHeight * 5) / 100 + 20)}px)`;
        this.ionBackdrop.style.background = 'transparent';
    }

    handlePanEnd(e) {
        if (e.center.y <= 300) {
            this.loginPage.style.transition = 'transform 0.5s';
            this.loginPage.style.transform = `translateY(0px)`;
            this.ionBackdrop.style.background = 'black';
            setTimeout(() => {
                this.loginPage.style.transition = 'none';
            }, 400);
        } else {
            this.closeLoginModal(null);
        }
    }

    onChangeShowPassword() {
        this.showPassword = !this.showPassword;
        this.showPasswordType = this.showPassword ? 'text' : 'password';
    }

    async closeLoginModal(data) {
        return await this.modalController.dismiss(data, 'error');
    }

    async goToRegister() {
        const modal = await this.modalController.create({
            component: RegisterPage,
            cssClass: 'login-modal',
            id: 'registerModal',
            enterAnimation: myEnterAnimation,
            leaveAnimation: myLeaveAnimation,
        });

        //get data before register modal dismiss
        modal.onWillDismiss().then(data => {
            if (data.role == 'ok') {
                console.log('data loginPage: ', data);
                this.modalController.dismiss(null, 'ok', 'loginModal');
            }
        });

        return await modal.present();
    }

    async presentAlert(title, subTitle, isSuccess = false) {
        let alert = await this.alertController.create({
            header: title,
            subHeader: subTitle,
            mode: 'ios',
            buttons: [
                {
                    text: 'OK',
                    handler: () => {
                        if (isSuccess) {
                            this.modalController.dismiss(null, 'ok');
                        }
                    },
                },
            ],
        });

        await alert.present();
    }

    onLoginForm() {
        if (!this.loginForm.valid) return;

        this.userService
            .login(this.loginForm.value)
            .subscribe(
                (result: { status: string; message: string; data: any }) => {
                    if (result.status === 'success') {
                        this.storage.set('email', result.data.email);
                        this.storage.set('_id', result.data._id);
                        this.storage
                            .set('token', result.data.token)
                            .then(() => {
                                this.presentAlert(
                                    'Login Successful',
                                    'nice trade!!!',
                                    true,
                                );
                            });
                    } else {
                        this.presentAlert(
                            'Login Unsuccessful',
                            'email or password invalid!!',
                        );
                    }
                },
            );
    }
}
