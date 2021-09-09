// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // stockUrl: 'http://localhost:8095/api/v1.0/market/stock',
  // companyUrl: 'http://localhost:8081/api/v1.0/market/company/info',
  // userUrl: 'http://localhost:8096/api/v1.0/market'
  stockUrl: 'http://localhost:8083/stockprice-service',
  companyUrl: 'http://localhost:8083/company-service',
  userUrl: 'http://localhost:8083/authentication-service'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
