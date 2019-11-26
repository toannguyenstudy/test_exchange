import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-passcode',
    templateUrl: './passcode.page.html',
    styleUrls: ['./passcode.page.scss'],
})
export class PasscodePage implements OnInit {
    passcode: string = '';

    constructor() {}

    ngOnInit() {}

    addPasscode(val) {
        this.passcode += val;
    }

    clearOne() {
        this.passcode = this.passcode.slice(0, -1);
    }
}
