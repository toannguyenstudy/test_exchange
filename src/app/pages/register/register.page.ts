import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CustomTranslateService } from '../../services/custom-translate.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    constructor(
        private modalController: ModalController,
        private customeTranslateService: CustomTranslateService,
    ) {}

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
