import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AddCompanyDetailsComponent } from './add-company-details/add-company-details.component';
import { GetCompanyDetailsComponent } from './get-company-details/get-company-details.component';
import { GetAllCompanyDetailsComponent } from './get-all-company-details/get-all-company-details.component';
import { AddStockPriceComponent } from './add-stock-price/add-stock-price.component';
import { GetStockDetailsComponent } from './get-stock-details/get-stock-details.component';
import { AuthService } from './service/auth.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path:'home', component: HomePageComponent},
  {path: 'register', component: RegisterComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'add-company', component: AddCompanyDetailsComponent },
  { path: 'get-company', component: GetCompanyDetailsComponent},
  { path: 'get-companies', component: GetAllCompanyDetailsComponent},
  { path: 'add-stock', component: AddStockPriceComponent},
  { path: 'get-stock', component: GetStockDetailsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
