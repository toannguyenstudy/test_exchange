import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root',
})
export class UserAuthGuard implements CanActivate {
    constructor(private router: Router, private storage: Storage) {}

    canActivate() {
        return this.storage.get('token').then(token => {
            if (token) {
                return true;
            } else {
                this.router.navigateByUrl('/tabs/account');
                return false;
            }
        });
    }
}
