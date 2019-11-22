import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { myEnterAnimation } from '../../animations/enter';
import { myLeaveAnimation } from '../../animations/leave';

import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    constructor(
        private modalController: ModalController,
        private translateService: TranslateService,
    ) {
        this.translateService.setDefaultLang('vn');
    }

    ngOnInit() {}

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
