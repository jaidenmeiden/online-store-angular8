// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'https://platzi-store.herokuapp.com',
  firebase: {
    apiKey: 'AIzaSyARcsHHd-sfRKtFcdwfg7fKCgG3SEc7U7A',
    authDomain: 'platzistore-1a4d8.firebaseapp.com',
    databaseURL: 'https://platzistore-1a4d8.firebaseio.com',
    projectId: 'platzistore-1a4d8',
    storageBucket: 'platzistore-1a4d8.appspot.com',
    messagingSenderId: '53056686818'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
