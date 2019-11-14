import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-exchange-trade',
    templateUrl: './exchange-trade.component.html',
    styleUrls: ['./exchange-trade.component.scss'],
})
export class ExchangeTradeComponent implements OnInit {
    maxSellAmount = 0;
    sellOrders = [
        {
            id: 1,
            price: 230000000,
            amount: 0.5,
        },
        {
            id: 2,
            price: 212000000,
            amount: 0.355,
        },
        {
            id: 3,
            price: 235850000,
            amount: 1.1,
        },
        {
            id: 4,
            price: 211320000,
            amount: 0.76,
        },
        {
            id: 5,
            price: 217350000,
            amount: 0.16,
        },
        {
            id: 6,
            price: 210000000,
            amount: 1,
        },
        {
            id: 7,
            price: 215000000,
            amount: 0.3,
        },
    ];

    maxBuyAmount = 0;
    buyOrders = [
        {
            id: 1,
            price: 205000000,
            amount: 0.5,
        },
        {
            id: 2,
            price: 209900000,
            amount: 1.3,
        },
        {
            id: 3,
            price: 206000000,
            amount: 1.7,
        },
        {
            id: 4,
            price: 211600000,
            amount: 0.76,
        },
        {
            id: 5,
            price: 210500000,
            amount: 0.35,
        },
        {
            id: 6,
            price: 207300000,
            amount: 0.89,
        },
        {
            id: 7,
            price: 210000000,
            amount: 0.215,
        },
    ];

    constructor() {}

    ngOnInit() {
        this.maxSellAmount = Math.max(
            ...this.sellOrders.map(order => order.amount),
        );
        this.maxBuyAmount = Math.max(
            ...this.buyOrders.map(order => order.amount),
        );

        this.sellOrders.sort((a, b) => {
            return a.price - b.price;
        });
        this.buyOrders.sort((a, b) => {
            return b.price - a.price;
        });
    }
}
