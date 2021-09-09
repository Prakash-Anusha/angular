import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCompanyDetailsComponent } from './add-company-details/add-company-details.component';
import { AddStockPriceComponent } from './add-stock-price/add-stock-price.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GetCompanyDetailsComponent } from './get-company-details/get-company-details.component';
import { GetAllCompanyDetailsComponent } from './get-all-company-details/get-all-company-details.component';
import { GetStockDetailsComponent } from './get-stock-details/get-stock-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCompanyDetailsComponent,
    AddStockPriceComponent,
    HomePageComponent,
    GetCompanyDetailsComponent,
    GetAllCompanyDetailsComponent,
    GetStockDetailsComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
