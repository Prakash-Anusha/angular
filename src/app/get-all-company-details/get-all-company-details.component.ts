import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../model/company';
import { CompanyServiceService } from '../service/company-service.service';

@Component({
  selector: 'app-get-all-company-details',
  templateUrl: './get-all-company-details.component.html',
  styleUrls: ['./get-all-company-details.component.scss']
})
export class GetAllCompanyDetailsComponent implements OnInit {

  companies: any;
  constructor(private companyService: CompanyServiceService, private router:Router) {
    this.companies = [];
  }

  ngOnInit() {
    this.getAllCompanyDetails();
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
  getAllCompanyDetails() {
    this.companyService.getAllCompanyDetails().subscribe(
      data => {
        console.log('companies', data);
        this.companies = data;
      },
      err => {
        console.log('Error in retriving companies:(');
      });
  }

}
