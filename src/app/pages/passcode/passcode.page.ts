import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-passcode',
    templateUrl: './passcode.page.html',
    styleUrls: ['./passcode.page.scss'],
})
export class PasscodePage implements OnInit {
    passcode: string = '';
    isFalse: boolean = false;

    constructor() {}

    ngOnInit() {}

    addPasscode(val) {
        this.passcode += val;
        if (this.passcode.length == 4) {
            if (this.passcode != '2601') {
                this.isFalse = true;
                setTimeout(() => {
                    this.isFalse = false;
                    this.passcode = '';
                }, 1000);
            } else {
                alert('ok con de');
            }
            return;
        }
    }

    clearOne() {
        this.passcode = this.passcode.slice(0, -1);
    }
}
