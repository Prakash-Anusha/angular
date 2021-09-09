import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Stock } from '../model/stock';

@Injectable({
  providedIn: 'root'
})
export class StockServiceService {

  addStock(stock: Stock) {
    console.log("calling stock add api", stock)
    return this.httpClient.post(environment.stockUrl + '/add/' + stock.companyCode, stock);
  }

  viewStock(companyCodeIn: number, startDateIn: string, endDateIn: string) {
    console.log(`calling stock api -- get`, companyCodeIn, startDateIn, endDateIn);
    return this.httpClient.get(environment.stockUrl + '/get/' + companyCodeIn + '/' + startDateIn + '/' + endDateIn);
  }

  constructor(private httpClient: HttpClient) { }
}
