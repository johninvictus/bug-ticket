// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAZrfkHdL-6ye3dcViH5_ZoYlg06MAttrk',
    authDomain: 'issue-ticket-e5a82.firebaseapp.com',
    databaseURL: 'https://issue-ticket-e5a82.firebaseio.com',
    projectId: 'issue-ticket-e5a82',
    storageBucket: 'issue-ticket-e5a82.appspot.com',
    messagingSenderId: '259732029268'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
