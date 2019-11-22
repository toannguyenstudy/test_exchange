import { Component, OnInit } from '@angular/core';
import { CustomTranslateService } from '../services/custom-translate.service';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.page.html',
    styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
    constructor(private customTranslateService: CustomTranslateService) {}

    ngOnInit() {}
}
