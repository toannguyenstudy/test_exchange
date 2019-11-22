import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { CustomTranslateService } from '../../services/custom-translate.service';
import { LoadingController } from '@ionic/angular';

@Component({
    selector: 'app-account',
    templateUrl: './account.page.html',
    styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
    constructor(
        private modalController: ModalController,
        private customeTranslateService: CustomTranslateService,
        private loadingController: LoadingController,
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

    async presentLoading() {
        const loading = await this.loadingController.create({
            message: 'Please wait..',
            duration: 2000,
        });
        await loading.present();

        const { role, data } = await loading.onDidDismiss();

        console.log('Loading dismissed!');
    }

    changeLanguage(lang) {
        this.presentLoading();
        setTimeout(() => {
            this.customeTranslateService.changeDefaultLanguage(lang);
        }, 2000);
    }
}
