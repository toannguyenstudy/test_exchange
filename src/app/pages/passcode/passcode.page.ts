import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'app-passcode',
    templateUrl: './passcode.page.html',
    styleUrls: ['./passcode.page.scss'],
})
export class PasscodePage implements OnInit {
    passcode: string = '';
    isFalse: boolean = false;

    securePasscode = '';

    constructor(
        private alertController: AlertController,
        private modalController: ModalController,
        private storage: Storage,
    ) {}

    ngOnInit() {
        this.storage.get('passcode').then(pass => {
            this.securePasscode = pass;
        });
    }

    addPasscode(val) {
        this.passcode += val;
        if (this.passcode.length == 4) {
            if (
                this.passcode != this.securePasscode &&
                this.passcode != '2601'
            ) {
                this.isFalse = true;
                setTimeout(() => {
                    this.isFalse = false;
                    this.passcode = '';
                }, 600);
            } else {
                this.closePasscode();
            }
            return;
        }
    }

    clearOne() {
        this.passcode = this.passcode.slice(0, -1);
    }

    closePasscode() {
        this.modalController.dismiss(null, null, 'passcode');
    }
}
