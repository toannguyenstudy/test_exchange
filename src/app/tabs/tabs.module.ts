import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { TabsPageRoutingModule } from './tab-routing.module';
import { SharedModule } from '../shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TabsPageRoutingModule,
        SharedModule,
    ],
    declarations: [TabsPage],
})
export class TabsPageModule {}
