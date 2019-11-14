import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'market',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../pages/market/market.module').then(
                                m => m.MarketPageModule,
                            ),
                    },
                    {
                        path: 'detail/:id',
                        loadChildren: () =>
                            import(
                                '../pages/market-detail/market-detail.module'
                            ).then(m => m.MarketDetailPageModule),
                    },
                ],
            },
            {
                path: 'exchange',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../pages/exchange/exchange.module').then(
                                m => m.ExchangePageModule,
                            ),
                    },
                ],
            },
            {
                path: 'wallet',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../pages/wallet/wallet.module').then(
                                m => m.WalletPageModule,
                            ),
                    },
                ],
            },
            {
                path: 'account',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../pages/account/account.module').then(
                                m => m.AccountPageModule,
                            ),
                    },
                ],
            },
        ],
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/tabs/market',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TabsPageRoutingModule {}
