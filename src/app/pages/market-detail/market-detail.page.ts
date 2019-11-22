import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { randomNumberInRange, roundNumberNearest } from '../../controls';
import { CustomTranslateService } from '../../services/custom-translate.service';

@Component({
    selector: 'app-market-detail',
    templateUrl: './market-detail.page.html',
    styleUrls: ['./market-detail.page.scss'],
})
export class MarketDetailPage implements OnInit {
    safeSrc: SafeResourceUrl;

    activatedCoin = '';
    activatedUnit = '';
    iframeSrc =
        'https://s.tradingview.com/widgetembed/?frameElementId=tradingview_kenniex&interval=60&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=fff&studies=%5B%5D&theme=Dark&style=2&timezone=Asia%2FBangkok&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=vi_VN&utm_medium=widget&utm_campaign=chart&symbol=BITTREX%3ABTCUSDT';
    // iframeSrc = 'https://xem.vn/';

    bidOrders = [];
    askOrders = [];

    marketHistory = [];
    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private sanitizer: DomSanitizer,
        private customTranslateService: CustomTranslateService,
    ) {}

    ngOnInit() {
        this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
            this.iframeSrc,
        );

        this.activatedCoin = this.activatedRoute.snapshot.paramMap.get('coin');
        this.activatedUnit = this.activatedRoute.snapshot.paramMap.get('unit');

        for (let i = 0; i < randomNumberInRange(1, 10, 0); i++) {
            this.bidOrders.push({
                price: roundNumberNearest(
                    parseInt(randomNumberInRange(150e6, 250e6, 0)),
                    1e5,
                ),
                amount: parseFloat(randomNumberInRange(0.1, 10, 6)),
            });
        }

        for (let i = 0; i < randomNumberInRange(1, 10, 0); i++) {
            this.askOrders.push({
                price: roundNumberNearest(
                    parseInt(randomNumberInRange(150e6, 250e6, 0)),
                    1e5,
                ),
                amount: parseFloat(randomNumberInRange(0.1, 10, 6)),
            });
        }

        for (let i = 0; i < randomNumberInRange(1, 10, 0); i++) {
            this.marketHistory.push({
                time: parseInt(
                    randomNumberInRange(15700000000000, 1579999999999, 0),
                ),
                price: roundNumberNearest(
                    parseInt(randomNumberInRange(150e6, 250e6, 0)),
                    1e5,
                ),
                amount: parseFloat(randomNumberInRange(0.1, 10, 6)),
                type: randomNumberInRange(1, 2, 0),
            });
        }
    }

    onClickNavigateExchangeTrade() {
        this.router.navigateByUrl('tabs/exchange');
    }
}
