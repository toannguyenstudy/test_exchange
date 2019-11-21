import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./tabs/tabs.module').then(m => m.TabsPageModule),
    },
    //   { path: 'wallet', loadChildren: './pages/wallet/wallet.module#WalletPageModule' },
    {
        path: 'detail/:coin/:unit',
        loadChildren:
            './pages/market-detail/market-detail.module#MarketDetailPageModule',
    },
    {
        path: 'balance',
        loadChildren: './pages/balance/balance.module#BalancePageModule',
    },
    {
        path: 'withdraw',
        loadChildren: './pages/withdraw/withdraw.module#WithdrawPageModule',
    },
    {
        path: 'deposit',
        loadChildren: './pages/deposit/deposit.module#DepositPageModule',
    },
    //   { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
