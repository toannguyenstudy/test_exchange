import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { CustomTranslateService } from '../../services/custom-translate.service';
import { TranslateService } from '@ngx-translate/core';

import { LoadingController } from '@ionic/angular';
import { CustomThemeService } from '../../services/custom-theme.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.page.html',
    styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
    currentLanguage = '';
    currentTheme = 'dark';

    constructor(
        private modalController: ModalController,
        private customeTranslateService: CustomTranslateService,
        private translateService: TranslateService,
        private customThemeService: CustomThemeService,
        private loadingController: LoadingController,
    ) {}

    ngOnInit() {
        this.currentLanguage = this.translateService.getDefaultLang();
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

    async presentLoading(message) {
        const loading = await this.loadingController.create({
            message,
            duration: 2000,
        });
        await loading.present();

        const { role, data } = await loading.onDidDismiss();
    }

    changeLanguage(lang) {
        let currentLang = this.translateService.getDefaultLang();
        let message = '';
        if (currentLang == 'vn') message = 'Please wait in second!';
        else if (currentLang == 'en') message = 'Vui lòng chờ trong giây lát!';
        this.presentLoading(message).then(x => {
            this.customeTranslateService.changeDefaultLanguage(lang);
            this.currentLanguage = lang;
        });
        // setTimeout(() => {

        // }, 2000);
    }

    changeTheme(theme) {
        let currentLang = this.translateService.getDefaultLang();
        let message = '';
        if (currentLang == 'en') message = 'Please wait in second!';
        else if (currentLang == 'vn') message = 'Vui lòng chờ trong giây lát!';

        this.presentLoading(message).then(x => {
            if (theme == 'light') {
                this.customThemeService.enableLightTheme();
                this.currentTheme = 'light';
            } else {
                this.customThemeService.enableDarkTheme();
                this.currentTheme = 'dark';
            }
        });
    }
}
