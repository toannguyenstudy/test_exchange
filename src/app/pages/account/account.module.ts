import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AccountPage } from './account.page';
import { SharedModule } from 'src/app/shared.module';

const routes: Routes = [
    {
        path: '',
        component: AccountPage,
    },
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        SharedModule,
    ],
    declarations: [AccountPage],
})
export class AccountPageModule {}
