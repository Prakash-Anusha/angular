export class Stock {

    id: number;
    stockPrice: number;
    companyCode: number;
    date: Date;

    constructor() {
        this.id = 0;
        this.stockPrice = 0;
        this.companyCode = 0;
        this.date = new Date();
    }
}
