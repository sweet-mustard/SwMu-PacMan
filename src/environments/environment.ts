// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {IMqttServiceOptions} from 'ngx-mqtt';

export const environment = {
  production: false
};

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: '//whosa.be',
    port: 8080,
    path: ''
};


/*

 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
