import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';

import { IonicModule } from '@ionic/angular';

import { DepositPage } from './deposit.page';

const routes: Routes = [
    {
        path: '',
        component: DepositPage,
    },
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        QRCodeModule,
        RouterModule.forChild(routes),
    ],
    declarations: [DepositPage],
})
export class DepositPageModule {}
