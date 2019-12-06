import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../services/user.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    showPassword: boolean = false;
    showPasswordType: string = 'password';

    registerForm: FormGroup;

    constructor(
        private modalController: ModalController,
        private alertController: AlertController,
        private translateService: TranslateService,
        private userService: UserService,
        private formBuilder: FormBuilder,
        private storage: Storage,
    ) {}

    get emailMessageError() {
        for (let err in this.registerForm.controls.email.errors) {
            if (err == 'required') {
                return this.translateService.instant(
                    'accountTab.registerPage.emailRequired',
                );
            }

            if (err == 'pattern') {
                return this.translateService.instant(
                    'accountTab.registerPage.emailInvalid',
                );
            }
        }
    }

    get passwordMessageError() {
        for (let err in this.registerForm.controls.password.errors) {
            if (err == 'required') {
                return this.translateService.instant(
                    'accountTab.registerPage.passwordRequired',
                );
            }
            if (err == 'minlength') {
                return this.translateService.instant(
                    'accountTab.registerPage.passwordMinlength',
                );
            }
        }
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
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

    onChangeShowPassword() {
        this.showPassword = !this.showPassword;
        this.showPasswordType = this.showPassword ? 'text' : 'password';
    }

    backToLogin() {
        this.modalController.dismiss(
            'register modoule',
            'false',
            'registerModal',
        );
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

    onRegisterForm() {
        if (!this.registerForm.valid) return;

        let user = this.registerForm.value;
        this.userService.register(user).subscribe(
            (result: { status: string; data: any; message: string }) => {
                if (result.status == 'error') {
                    this.presentAlert('Register Unsuccessful', result.message);
                } else {
                    this.storage.set('email', result.data.email);
                    this.storage.set('_id', result.data._id);
                    this.storage.set('token', result.data.token).then(() => {
                        this.presentAlert(
                            'Register Successful',
                            'Nice trade!!!',
                            true,
                        );
                    });
                }
            },
            err => {
                console.log('err: ', err);
            },
        );
    }
}
