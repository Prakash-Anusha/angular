import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../model/company';
import { CompanyServiceService } from '../service/company-service.service';


@Component({
  selector: 'app-get-company-details',
  templateUrl: './get-company-details.component.html',
  styleUrls: ['./get-company-details.component.scss']
})

export class GetCompanyDetailsComponent implements OnInit {

  companies: any;
  ifPresent = false;
  searchKeyword: string;
  constructor(private companyService: CompanyServiceService, private router:Router) {
    this.companies = [];
  }

  ngOnInit() {
   this.getCompanyDetails();

  }

  addCompany = function() {
    this.router.navigate(['/add-company']);
  };

  getCompanies = function() {
    this.router.navigate(['/get-companies']);
  };

  addStock = function() {
    this.router.navigate(['/add-stock']);
  };

  getStock = function() {
    this.router.navigate(['/get-stock']);
  };

  getCompany = function() {
    this.router.navigate(['/get-company']);
  };

  logout() {
    this.router.navigate(['/dashboard']);
  };

  getCompanyDetails() {
    this.companyService.getAllCompanyDetails().subscribe(
      data => {
        console.log('Company details ' , data);
        this.companies = data;
        this.ifPresent = true;
      }
    );
  }

}
