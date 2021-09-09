import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Company } from '../model/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  addCompany(company: Company) {
    console.log("calling company api", company)
    return this.httpClient.post(environment.companyUrl + '/register', company);
  }

  getAllCompanyDetails() {
    console.log('Calling api companyUrl');
    return this.httpClient.get(environment.companyUrl + '/all');
  }

  getCompanyDetails(companyCode) {
    return this.httpClient.get(environment.companyUrl, companyCode);
  }
  constructor(private httpClient: HttpClient) { }
}
