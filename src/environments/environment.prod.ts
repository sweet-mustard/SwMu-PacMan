import {IMqttServiceOptions} from 'ngx-mqtt';

export const environment = {
  production: true
};

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
    hostname: '//whosa.be',
    port: 8080,
    path: ''
};
