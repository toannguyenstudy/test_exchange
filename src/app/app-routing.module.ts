import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./tabs/tabs.module').then(m => m.TabsPageModule),
        // redirectTo: 'passcode',
        // pathMatch: 'full',
    },
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
    {
        path: 'passcode',
        loadChildren: './pages/passcode/passcode.module#PasscodePageModule',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
