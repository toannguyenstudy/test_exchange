import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    constructor(private modalController: ModalController) {}

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
