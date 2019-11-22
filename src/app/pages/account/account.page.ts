import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { CustomTranslateService } from '../../services/custom-translate.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.page.html',
    styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
    constructor(
        private modalController: ModalController,
        private customeTranslateService: CustomTranslateService,
    ) {}

    ngOnInit() {}

    async openLoginModal() {
        const modal = await this.modalController.create({
            component: LoginPage,
            cssClass: 'login-modal',
            id: 'loginModal',
        });

        modal.onDidDismiss().then(data => {});

        return await modal.present();
    }

    changeLanguage(lang) {
        this.customeTranslateService.changeDefaultLanguage(lang);
    }
}
