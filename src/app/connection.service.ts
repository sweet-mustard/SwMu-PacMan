import { Injectable } from '@angular/core';
import {MqttService} from 'ngx-mqtt';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private _mqttService: MqttService) { }

  sendCommand(ghost, direction) {
    this._mqttService.unsafePublish( 'keystrokes/directions', ghost + '-' + direction);
  }
}
