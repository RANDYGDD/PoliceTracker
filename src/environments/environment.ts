// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyA6IlWuVpuKb5KT81_hut-1rlIJ7U29rGI",
    authDomain: "tracker-police.firebaseapp.com",
    databaseURL: "https://tracker-police.firebaseio.com",
    projectId: "tracker-police",
    storageBucket: "tracker-police.appspot.com",
    messagingSenderId: "1079018167723"
  }
};
