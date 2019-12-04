import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

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
        private translateService: TranslateService,
        private formBuilder: FormBuilder,
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

    onRegisterForm() {
        if (!this.registerForm.valid) return;
        alert('ok het nha');
        this.modalController.dismiss(null, null, 'registerModal');
        this.modalController.dismiss(null, null, 'loginModal');
    }
}
