import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { randomNumberInRange, roundNumberNearest } from '../../controls';

@Component({
    selector: 'app-market-detail',
    templateUrl: './market-detail.page.html',
    styleUrls: ['./market-detail.page.scss'],
})
export class MarketDetailPage implements OnInit {
    activatedCoin = '';
    activatedUnit = '';

    bidOrders = [];
    askOrders = [];

    marketHistory = [];
    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit() {
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
