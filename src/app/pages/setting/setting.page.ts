import { Component, OnInit } from '@angular/core';
import { CustomThemeService } from 'src/app/services/custom-theme.service';
import { CustomTranslateService } from 'src/app/services/custom-translate.service';
import { LoadingController } from '@ionic/angular';

@Component({
    selector: 'app-setting',
    templateUrl: './setting.page.html',
    styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
    currentTheme: string;
    currentLanguage: string;
    passcodeActive: boolean = true;

    constructor(
        private customThemeService: CustomThemeService,
        private customTranslateService: CustomTranslateService,
        private loadingController: LoadingController,
    ) {}

    ngOnInit() {
        this.currentTheme = this.customThemeService.getCurrentTheme();
        this.currentLanguage = this.customTranslateService.getCurrentLanguage();
    }

    async presentLoading(message) {
        const loading = await this.loadingController.create({
            message,
            duration: 2000,
        });
        await loading.present();

        const { role, data } = await loading.onDidDismiss();
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

        // let message;
        // let currentLang = this.customTranslateService.getCurrentLanguage();
        // if (currentLang == 'vn') message = 'Please wait in second!';
        // else if (currentLang == 'en') message = 'Vui lòng chờ trong giây lát!';

        // this.presentLoading(message);
    }
}
