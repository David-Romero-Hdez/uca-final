export const environment = {
  production: true,
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
