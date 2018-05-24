import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AccountsComponent } from './accounts/accounts.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { DealsComponent } from './deals/deals.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StrategiesComponent } from './strategies/strategies.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'accounts', component: AccountsComponent,
      children: [
        { path: '', redirectTo: '', pathMatch: 'full' },
        { path: ':code', component: AccountDetailComponent }
      ]
  },
  { path: 'strategies', component: StrategiesComponent},
  { path: 'deals', component: DealsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
