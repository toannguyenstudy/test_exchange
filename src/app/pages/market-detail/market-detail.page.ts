import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-market-detail',
    templateUrl: './market-detail.page.html',
    styleUrls: ['./market-detail.page.scss'],
})
export class MarketDetailPage implements OnInit {
    activatedCoin = null;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedCoin = this.activatedRoute.snapshot.paramMap.get('id');
    }
}
