import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from '../model/company';
import { CompanyServiceService } from '../service/company-service.service';

@Component({
  selector: 'app-add-company-details',
  templateUrl: './add-company-details.component.html',
  styleUrls: ['./add-company-details.component.scss']
})
export class AddCompanyDetailsComponent implements OnInit {

  company: Company;
  companyForm: FormGroup;
  isPresent = false;
  constructor(private companyService: CompanyServiceService, private router: Router) { 
    this.isPresent = false;
  }

  ngOnInit() {
    this.companyForm = new FormGroup({
      companyCode : new FormControl('', [Validators.required]),
      companyName : new FormControl('', [Validators.required]),
      companyCeo  : new FormControl('', [Validators.required]),
      companyTurnOver : new FormControl('', [Validators.required]),
      companyWebsite : new FormControl('', [Validators.required]),
      stockExchange : new FormControl('', [Validators.required])
    });
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

  send(companyForm) {
    console.log('company ', companyForm.value);
    this.companyService.addCompany(companyForm.value).subscribe(
      data => {
        this.isPresent = true;
       //companyForm.reset();
      }, err  => {
        alert('API call failed:(');
      }
    );

  }

  resetForm(companyForm ) {
    companyForm.reset();
  }
  

}
