import { Stock } from './stock';

export class FinalResult {

     stockPriceList: Array<Stock>;
      minStockPrice: number;
      maxStockPrice: number;
      avgStockPrice: number;

      constructor() {
          this.stockPriceList = [];
          this.minStockPrice = 0;
          this.maxStockPrice = 0;
          this.avgStockPrice = 0;
      }

}
