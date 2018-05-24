import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule,
  MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';

import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { AccountsComponent } from './accounts/accounts.component';
import { StrategiesComponent } from './strategies/strategies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { StrategyDetailComponent } from './strategy-detail/strategy-detail.component';
import { TagsComponentComponent } from './tags-component/tags-component.component';
import { DealsComponent } from './deals/deals.component';
import { DealDetailComponent } from './deal-detail/deal-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccountsComponent,
    StrategiesComponent,
    DashboardComponent,
    AccountDetailComponent,
    StrategyDetailComponent,
    TagsComponentComponent,
    DealsComponent,
    DealDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatChipsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
