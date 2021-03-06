import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

import { CustomTranslateService } from '../../services/custom-translate.service';

@Component({
    selector: 'app-market',
    templateUrl: './market.page.html',
    styleUrls: ['./market.page.scss'],
})
export class MarketPage implements OnInit {
    constructor(
        private router: Router,
        private nav: NavController,
        private customTranslateService: CustomTranslateService,
    ) {}

    ngOnInit() {}

    segmentChanged(e) {
        console.log(e.target.value);
    }

    onChange(coin, unit) {
        // this.router.navigateByUrl('tabs/market/detail');
        // this.nav.navigateForward('tabs/market/detail/' + coin);
        this.nav.navigateForward(`detail/${coin}/${unit}`);
    }
}
