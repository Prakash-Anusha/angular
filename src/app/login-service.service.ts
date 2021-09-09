import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private httpClient: HttpClient) { }
  addCompany(user : User) {
    console.log("calling User api", user)
    return this.httpClient.post(environment.userUrl + '/add/user', user);
  }

  validate(emailId: string, password: string) {
    console.log('Calling api User', emailId, password);
    return this.httpClient.get(environment.userUrl + '/authenticate/'+ emailId +'/'+ password);
  }

}
