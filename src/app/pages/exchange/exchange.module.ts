import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExchangePage } from './exchange.page';
import { ExchangeTradeComponent } from 'src/app/components/exchange-trade/exchange-trade.component';
import { ExchangeOpenOrderComponent } from 'src/app/components/exchange-open-order/exchange-open-order.component';
import { ExchangeHistoryComponent } from 'src/app/components/exchange-history/exchange-history.component';
import { SharedModule } from 'src/app/shared.module';

const routes: Routes = [
    {
        path: '',
        component: ExchangePage,
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
    declarations: [
        ExchangePage,
        ExchangeTradeComponent,
        ExchangeOpenOrderComponent,
        ExchangeHistoryComponent,
    ],
})
export class ExchangePageModule {}
