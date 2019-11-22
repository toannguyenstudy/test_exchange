import { Component, OnInit } from '@angular/core';
import { CustomTranslateService } from '../../services/custom-translate.service';

@Component({
    selector: 'app-balance',
    templateUrl: './balance.page.html',
    styleUrls: ['./balance.page.scss'],
})
export class BalancePage implements OnInit {
    constructor(private customeTranslateService: CustomTranslateService) {}

    ngOnInit() {}
}
