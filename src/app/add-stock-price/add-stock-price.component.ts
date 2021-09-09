import { ThrowStmt } from '@angular/compiler';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { send } from 'process';
import { Stock } from '../model/stock';
import { StockServiceService } from '../service/stock-service.service';

@Component({
  selector: 'app-add-stock-price',
  templateUrl: './add-stock-price.component.html',
  styleUrls: ['./add-stock-price.component.scss']
})
export class AddStockPriceComponent implements OnInit {

  stock: Stock;
  stockForm: FormGroup;
  isPresent = false;

  constructor(private stockService: StockServiceService, private router:Router) { 
    this.isPresent = false;
  }

  ngOnInit() {
    this.stockForm = new FormGroup({
      // id : new FormControl('', [Validators.required]),
      stockPrice : new FormControl('', [Validators.required]),
      companyCode : new FormControl('', [Validators.required])
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
  send(stockForm) {
    console.log('stock Fprm' , stockForm.value);
    this.stockService.addStock(stockForm.value).subscribe(
      data => {
        this.isPresent = true;
        // stockForm.reset();
      }, err  => {
        alert('API call failed:(');
      }
    );

  }

  resetForm(stockForm ) {
    stockForm.reset();
  }

}
