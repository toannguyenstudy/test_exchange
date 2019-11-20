import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-deposit',
    templateUrl: './deposit.page.html',
    styleUrls: ['./deposit.page.scss'],
})
export class DepositPage implements OnInit {
    address: string = '0x95cFaDDac52b76DA6e858Dd0896a46fcDf79E486';

    constructor() {}

    ngOnInit() {}
}
