import { Component, OnInit } from '@angular/core';
import { CustomTranslateService } from '../../services/custom-translate.service';

@Component({
    selector: 'app-exchange',
    templateUrl: './exchange.page.html',
    styleUrls: ['./exchange.page.scss'],
})
export class ExchangePage implements OnInit {
    constructor(private customTranslateService: CustomTranslateService) {}

    ngOnInit() {}
}
