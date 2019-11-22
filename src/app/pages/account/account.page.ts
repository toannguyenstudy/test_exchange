import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-account',
    templateUrl: './account.page.html',
    styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
    constructor(
        private modalController: ModalController,
        private translateService: TranslateService,
    ) {
        this.translateService.setDefaultLang('vn');
    }

    ngOnInit() {}

    selectLanguage(lang) {
        this.translateService.setDefaultLang(lang);
    }

    async openLoginModal() {
        const modal = await this.modalController.create({
            component: LoginPage,
            cssClass: 'login-modal',
            id: 'loginModal',
        });

        modal.onDidDismiss().then(data => {});

        return await modal.present();
    }
}
