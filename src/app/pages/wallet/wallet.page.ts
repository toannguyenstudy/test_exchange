import { Component, OnInit } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
import { CustomTranslateService } from '../../services/custom-translate.service';

@Component({
    selector: 'app-wallet',
    templateUrl: './wallet.page.html',
    styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
    constructor() {}

    ngOnInit() {
        console.log('wallet');
    }

    ionViewWillEnter() {
        console.log('wallet enter');
    }
}
