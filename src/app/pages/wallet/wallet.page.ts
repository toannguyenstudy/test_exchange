import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-wallet',
    templateUrl: './wallet.page.html',
    styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
    constructor(private translateService: TranslateService) {
        this.translateService.setDefaultLang('vn');
    }

    ngOnInit() {}
}
