import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MarketPage } from './market.page';
import { SharedModule } from 'src/app/shared.module';
// import { MarketDetailPage } from '../market-detail/market-detail.page';

const routes: Routes = [
    {
        path: '',
        component: MarketPage,
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
    declarations: [MarketPage],
})
export class MarketPageModule {}
