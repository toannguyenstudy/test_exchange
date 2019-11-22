import { Component, OnInit } from '@angular/core';
import { CustomTranslateService } from '../../services/custom-translate.service';

@Component({
    selector: 'app-withdraw',
    templateUrl: './withdraw.page.html',
    styleUrls: ['./withdraw.page.scss'],
})
export class WithdrawPage implements OnInit {
    constructor(private customTranslateService: CustomTranslateService) {}

    ngOnInit() {}
}
