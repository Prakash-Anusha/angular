import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FinalResult } from '../model/finalResult';
import { Stock } from '../model/stock';
import { StockServiceService } from '../service/stock-service.service';

@Component({
  selector: 'app-get-stock-details',
  templateUrl: './get-stock-details.component.html',
  styleUrls: ['./get-stock-details.component.scss']
})
export class GetStockDetailsComponent implements OnInit {

  stock: Stock;
  stockForm: FormGroup;
  companyCodeIn: number;
  companyCodeOut: number;
  startDateIn : string;
  endDateIn: string;
  stocks: any;
  isPresent = false;
  tableShow = false;
  constructor(private stockService: StockServiceService, private router:Router) {
    this.companyCodeIn = 0;
    this.companyCodeOut = 0;
   
    this.stocks = [];
    this.isPresent = false;
    this.tableShow = false;
   }

  ngOnInit() {
    this.startDateIn =  '';
    this.endDateIn =  '';
    this.stockForm = new FormGroup({
      companyCode : new FormControl('', [Validators.required]),
      from : new FormControl('', [Validators.required]),
      to : new FormControl( '',  [Validators.required])
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
    get companyCode() {
      return this.stockForm.get('companyCode');
    }

    set companyCode(fmCompanyCode: any) {
      this.stockForm.setValue({
        companyCode: fmCompanyCode.value
      });
    }

    get startDate() {
      return this.stockForm.get('from');
    }

    set startDate(fmStartDate: any) {
      this.stockForm.setValue({
        startDate: fmStartDate.value
      });
    }

    get endDate() {
      return this.stockForm.get('to');
    }

    set endDate(fmEndDate: any) {
      this.stockForm.setValue({
        endDate: fmEndDate.value
      });
    }

  viewStocks(stockForm) {
    console.log('StockForm', stockForm);
    console.log('viewSTock ', stockForm.value.companyCode);
    console.log('viewSTock ', stockForm.value.from);
    console.log('viewSTock ', stockForm.value.to);
    
    this.startDateIn = stockForm.value.from;
    this.endDateIn = stockForm.value.to;
    this.stockService.viewStock(stockForm.value.companyCode, this.startDateIn, this.endDateIn).subscribe(
      data => {
        console.log('api call success', data);
        this.isPresent = true;
        this.tableShow = true;
        this.companyCodeOut = stockForm.value.companyCode;
        this.stocks = data;
      },
      err => {
        console.log('api call failed', err);
        alert(err.error.message);
      }
    );

  }
}
