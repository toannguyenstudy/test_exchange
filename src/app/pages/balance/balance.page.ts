import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-balance',
    templateUrl: './balance.page.html',
    styleUrls: ['./balance.page.scss'],
})
export class BalancePage implements OnInit {
    constructor(private translateService: TranslateService) {
        this.translateService.setDefaultLang('vn');
    }

    ngOnInit() {}
}
