import { Component, OnInit } from '@angular/core';
import { CustomThemeService } from 'src/app/services/custom-theme.service';
import { CustomTranslateService } from 'src/app/services/custom-translate.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'app-setting',
    templateUrl: './setting.page.html',
    styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
    currentTheme: string;
    currentLanguage: string;
    passcodeActive: boolean = false;

    constructor(
        private customThemeService: CustomThemeService,
        private customTranslateService: CustomTranslateService,
        private loadingController: LoadingController,
        private alertController: AlertController,
        private storage: Storage,
    ) {}

    ngOnInit() {
        this.currentTheme = this.customThemeService.getCurrentTheme();
        this.currentLanguage = this.customTranslateService.getCurrentLanguage();
        this.storage.get('passcodeActive').then(active => {
            this.passcodeActive = active;
        });
    }

    async presentLoading(message) {
        const loading = await this.loadingController.create({
            message,
            duration: 2000,
        });
        await loading.present();

        const { role, data } = await loading.onDidDismiss();
    }

    async presentAlertChangePasscode(setType) {
        let alert = await this.alertController.create({
            header: 'Set new passcode',
            inputs: [
                {
                    type: 'number',
                    name: 'passcode',
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: () => {
                        if (setType == 'first-setup') {
                            this.storage.set('passcodeActive', false);
                            this.passcodeActive = false;
                        }
                    },
                },
                {
                    text: 'OK',
                    handler: data => {
                        this.storage.set('passcode', data.passcode.toString());
                    },
                },
            ],
        });

        await alert.present();
    }

    changeTheme(e) {
        let theme = e.target.value;

        let currentLang = this.customTranslateService.getCurrentLanguage();
        let message = '';
        if (currentLang == 'en') message = 'Please wait in second!';
        else if (currentLang == 'vn') message = 'Vui lòng chờ trong giây lát!';

        this.presentLoading(message).then(x => {
            switch (theme) {
                case 'dark':
                    this.currentTheme = 'dark';
                    return this.customThemeService.enableDarkTheme();
                case 'light':
                    this.currentTheme = 'light';
                    return this.customThemeService.enableLightTheme();
            }
        });
    }

    changeLanguage(e) {
        let lang = e.target.value;
        this.currentLanguage = lang;
        this.customTranslateService.changeDefaultLanguage(lang);
    }

    async onChangePasscodeActive() {
        if (this.passcodeActive) {
            this.storage.set('passcodeActive', true);
            let passcode = await this.storage.get('passcode');
            if (!passcode) {
                this.presentAlertChangePasscode('first-setup');
            }
        } else {
            this.storage.set('passcodeActive', false);
        }
    }

    async changePasscode() {
        this.presentAlertChangePasscode('none');
    }

    onclear() {
        this.storage.clear();
    }
}
