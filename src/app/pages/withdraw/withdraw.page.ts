import { Component, OnInit } from '@angular/core';
import { CustomTranslateService } from '../../services/custom-translate.service';

import { ToastController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
    selector: 'app-withdraw',
    templateUrl: './withdraw.page.html',
    styleUrls: ['./withdraw.page.scss'],
})
export class WithdrawPage implements OnInit {
    address: string = '';

    constructor(
        private customTranslateService: CustomTranslateService,
        private toastController: ToastController,
        private barcodeScanner: BarcodeScanner,
    ) {}

    ngOnInit() {}

    async showToast(message) {
        let toast = await this.toastController.create({
            message,
            duration: 5000,
            position: 'middle',
        });

        toast.present();
    }

    openQRScanner() {
        this.barcodeScanner
            .scan()
            .then(barcodeData => {
                if (barcodeData.text && barcodeData.text != '') {
                    this.address = barcodeData.text;
                }
            })
            .catch(err => {
                this.showToast('ERROR: ' + err);
            });
    }
}
