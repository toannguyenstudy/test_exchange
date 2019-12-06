import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { Storage } from '@ionic/storage';
import { LoginPage } from '../pages/login/login.page';

@Injectable({
    providedIn: 'root',
})
export class UserAuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private storage: Storage,
        private modalController: ModalController,
    ) {}

    canActivate() {
        return this.storage.get('token').then(async token => {
            if (token) {
                return true;
            } else {
                const modal = await this.modalController.create({
                    component: LoginPage,
                    cssClass: 'login-modal',
                    id: 'loginModal',
                });

                modal.onWillDismiss().then(data => {
                    if (data.role == 'error') {
                        return false;
                    }
                    if (data.role == 'ok') {
                        this.router.navigateByUrl('/tabs/wallet');

                        return true;
                    }
                });

                await modal.present();
            }
        });
    }
}
