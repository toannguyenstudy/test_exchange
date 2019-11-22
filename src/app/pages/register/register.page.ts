import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    constructor(
        private modalController: ModalController,
        private translateService: TranslateService,
    ) {
        this.translateService.setDefaultLang('vn');
    }

    ngOnInit() {}

    onDismiss() {
        this.modalController.dismiss(
            'register modoule',
            'false',
            'registerModal',
        );
    }

    onRegister() {
        this.modalController.dismiss('register modoule', 'ok', 'registerModal');
    }
}
