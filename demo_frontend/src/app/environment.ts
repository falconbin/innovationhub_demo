// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  config: {
    clientId: '9ca37000-640f-4481-9586-8756b17f05e7',
    endpoints: {
      'https://login.microsoftonline.com/70f3a5a4-04d1-4c21-933b-310f28b65107/oauth2/v2.0/authorize':
        '9ca37000-640f-4481-9586-8756b17f05e7',
    },
    redirectUri: 'http://localhost:4200',
    tenant: '70f3a5a4-04d1-4c21-933b-310f28b65107',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
