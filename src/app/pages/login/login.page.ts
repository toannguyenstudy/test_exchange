import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { myEnterAnimation } from '../../animations/enter';
import { myLeaveAnimation } from '../../animations/leave';

import { CustomTranslateService } from '../../services/custom-translate.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    showPassword: boolean = false;
    showPasswordType: string = 'password';

    loginPage = null;
    constructor(
        private modalController: ModalController,
        private customeTranslateService: CustomTranslateService,
    ) {}

    ngOnInit() {
        this.loginPage = document.getElementById('loginModal');
        // .children.item(1)
        // .children.item(0);
    }

    handlePan(e) {
        //console.log(e.center.y);
        this.loginPage.style.transform = `translateY(${e.center.y - 40}px)`;
    }

    handlePanEnd(e) {
        if (e.center.y <= 300) {
            this.loginPage.style.transition = 'transform 0.5s';
            this.loginPage.style.transform = `translateY(0px)`;
            setTimeout(() => {
                this.loginPage.style.transition = 'none';
            }, 500);
        } else {
            this.closeLoginModal(null);
        }
    }

    onChangeShowPassword() {
        this.showPassword = !this.showPassword;
        this.showPasswordType = this.showPassword ? 'text' : 'password';
    }

    async closeLoginModal(data) {
        return await this.modalController.dismiss(data);
    }

    async goToRegister() {
        const modal = await this.modalController.create({
            component: RegisterPage,
            cssClass: 'login-modal',
            id: 'registerModal',
            enterAnimation: myEnterAnimation,
            leaveAnimation: myLeaveAnimation,
        });

        modal.onDidDismiss().then(data => {
            if (data.role == 'ok') {
                this.modalController.dismiss('loginModal', 'ok', 'loginModal');
            }
        });

        return await modal.present();
    }
}
