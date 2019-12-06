import { Component, OnInit } from '@angular/core';
import {
    ModalController,
    AlertController,
    LoadingController,
} from '@ionic/angular';

import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login.page';

import { TranslateService } from '@ngx-translate/core';
import { CustomTranslateService } from '../../services/custom-translate.service';
import { CustomThemeService } from '../../services/custom-theme.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.page.html',
    styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
    currentLanguage = '';
    currentTheme = 'dark';

    isLoggedIn: boolean;
    email: string = null;

    constructor(
        private modalController: ModalController,
        private alertController: AlertController,
        private customeTranslateService: CustomTranslateService,
        private translateService: TranslateService,
        private customThemeService: CustomThemeService,
        private loadingController: LoadingController,
        private storage: Storage,
        private userSerivce: UserService,
    ) {}

    ngOnInit() {
        this.currentLanguage = this.translateService.getDefaultLang();
        // this.checkLogged();
    }

    /**
     * Refresh display with Logged In or Not
     */
    ionViewWillEnter() {
        this.checkLogged();
    }

    /**
     * Check user Logged In and change display menu
     */
    checkLogged() {
        this.storage
            .get('token')
            .then(token => {
                if (token) {
                    this.isLoggedIn = true;
                    this.storage.get('email').then(email => {
                        this.email = email;
                    });
                } else this.isLoggedIn = false;
            })
            .catch(err => {
                this.isLoggedIn = false;
                console.log(err);
            });
    }

    /**
     * Show Login page modal
     */
    async openLoginModal() {
        const modal = await this.modalController.create({
            component: LoginPage,
            cssClass: 'login-modal',
            id: 'loginModal',
        });

        modal.onWillDismiss().then(data => {
            console.log('accountPage data: ', data);
            this.checkLogged();
        });

        return await modal.present();
    }

    /**
     * show loading spinner
     * @param message {string} title of loading spinner
     */
    async presentLoading(message) {
        const loading = await this.loadingController.create({
            message,
            duration: 2000,
        });
        await loading.present();

        const { role, data } = await loading.onDidDismiss();
    }

    /**
     * Change default language of app
     * @param lang selected language : 'en' | 'vn'
     */
    changeLanguage(lang) {
        let currentLang = this.translateService.getDefaultLang();
        let message = '';
        if (currentLang == 'vn') message = 'Please wait in second!';
        else if (currentLang == 'en') message = 'Vui lòng chờ trong giây lát!';
        this.presentLoading(message).then(x => {
            this.customeTranslateService.changeDefaultLanguage(lang);
            this.currentLanguage = lang;
        });
    }

    /**
     * Change default theme of app
     * @param lang selected theme : 'dark' | 'light'
     */
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

    /**
     * Clear all storage with about us menu (for testing)
     */
    clearAllStorage() {
        this.storage.clear().then(() => {
            alert('clear ok');
        });
    }

    /**
     * Show confirm logout alert
     */
    async presentConfirmLogoutAlert() {
        let confirmAlert = await this.alertController.create({
            header: 'Warning',
            subHeader: 'Are you sure to log out?',
            buttons: [
                {
                    text: 'OK',
                    handler: async () => {
                        await this.storage.remove('token');
                        await this.storage.remove('email');
                        await this.storage.remove('_id');
                        this.checkLogged();
                    },
                },
                {
                    text: 'Cancel',
                },
            ],
        });
        await confirmAlert.present();
    }

    /**
     * User click to log out button
     */
    async logoutUser() {
        this.presentConfirmLogoutAlert().then(() => {});
    }
}
