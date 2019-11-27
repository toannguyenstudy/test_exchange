import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { PasscodePage } from './pages/passcode/passcode.page';

import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private modalController: ModalController,
    ) {
        this.initializeApp();
        this.showPasscode();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.backgroundColorByName('black');
            this.splashScreen.hide();
        });
    }

    async showPasscode() {
        let passcodeModal = await this.modalController.create({
            id: 'passcode',
            component: PasscodePage,
        });
        return await passcodeModal.present();
    }
}
