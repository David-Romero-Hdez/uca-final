// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  GOOGLE_CLOUD_KEY: process.env.GOOGLE_CLOUD_KEY,
  firebase: {
    apiKey: process.env.GOOGLE_CLOUD_KEY,
    authDomain: process.env.GOOGLE_AUTHDOMAIN,
    databaseURL: process.env.GOOGLE_DATABASEURL,
    projectId: process.env.GOOGLE_PROJECTID,
    storageBucket: process.env.GOOGLE_STORAGEBUCKET,
    messagingSenderId: process.env.GOOGLE_MESSAGINGSENDERID,
    appId: process.env.GOOGLE_APPID,
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
