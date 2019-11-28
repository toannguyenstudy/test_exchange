import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root',
})
export class CustomTranslateService {
    constructor(private translateService: TranslateService) {
        this.translateService.setDefaultLang('en');
    }

    changeDefaultLanguage(lang) {
        this.translateService.setDefaultLang(lang);
    }

    getCurrentLanguage() {
        return this.translateService.getDefaultLang();
    }
}
