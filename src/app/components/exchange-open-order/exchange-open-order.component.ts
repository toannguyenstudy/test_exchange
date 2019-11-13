import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-exchange-open-order',
    templateUrl: './exchange-open-order.component.html',
    styleUrls: ['./exchange-open-order.component.scss'],
})
export class ExchangeOpenOrderComponent implements OnInit {
    openOrdersSell = [
        {
            id: 1,
            price: 210000000,
            amount: 0.465483,
            total: 97751430,
            date: 1245869722312,
        },
        {
            id: 2,
            price: 230000000,
            amount: 0.5,
            total: 115000000,
            date: 1573642579571,
        },
        {
            id: 3,
            price: 230000000,
            amount: 0.1,
            total: 23000000,
            date: 1573627760146,
        },
        {
            id: 14,
            price: 210000000,
            amount: 0.465483,
            total: 97751430,
            date: 1245869722312,
        },
        {
            id: 5,
            price: 210000000,
            amount: 0.465483,
            total: 97751430,
            date: 1245869722312,
        },
        {
            id: 6,
            price: 210000000,
            amount: 0.465483,
            total: 97751430,
            date: 1245869722312,
        },
        {
            id: 7,
            price: 210000000,
            amount: 0.465483,
            total: 97751430,
            date: 1245869722312,
        },
        {
            id: 8,
            price: 210000000,
            amount: 0.465483,
            total: 97751430,
            date: 1245869722312,
        },
        {
            id: 10,
            price: 210000000,
            amount: 0.465483,
            total: 97751430,
            date: 1245869722312,
        },
        {
            id: 11,
            price: 210000000,
            amount: 0.465483,
            total: 97751430,
            date: 1245869722312,
        },
        {
            id: 12,
            price: 210000000,
            amount: 0.465483,
            total: 97751430,
            date: 1245869722312,
        },
        {
            id: 13,
            price: 210000000,
            amount: 0.465483,
            total: 97751430,
            date: 1245869722312,
        },
    ];
    openOrdersBuy = [
        {
            id: 1,
            price: 210000000,
            amount: 0.7,
            total: 147000000,
            date: 1244567823214,
        },
        {
            id: 2,
            price: 230000000,
            amount: 0.5,
            total: 115000000,
            date: 1573642579571,
        },
        {
            id: 3,
            price: 230000000,
            amount: 0.1,
            total: 23000000,
            date: 1573627760146,
        },
        {
            id: 14,
            price: 210000000,
            amount: 0.465483,
            total: 97751430,
            date: 1245869722312,
        },
        {
            id: 5,
            price: 210000000,
            amount: 0.465483,
            total: 97751430,
            date: 1245869722312,
        },
        {
            id: 6,
            price: 210000000,
            amount: 0.465483,
            total: 97751430,
            date: 1245869722312,
        },
        {
            id: 7,
            price: 210000000,
            amount: 0.465483,
            total: 97751430,
            date: 1245869722312,
        },
        {
            id: 8,
            price: 210000000,
            amount: 0.465483,
            total: 97751430,
            date: 1245869722312,
        },
        {
            id: 10,
            price: 210000000,
            amount: 0.465483,
            total: 97751430,
            date: 1245869722312,
        },
        {
            id: 11,
            price: 210000000,
            amount: 0.465483,
            total: 97751430,
            date: 1245869722312,
        },
        {
            id: 12,
            price: 210000000,
            amount: 0.465483,
            total: 97751430,
            date: 1245869722312,
        },
        {
            id: 13,
            price: 210000000,
            amount: 0.465483,
            total: 97751430,
            date: 1245869722312,
        },
    ];

    constructor() {}

    ngOnInit() {}
}
