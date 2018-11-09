import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GhostSelectionComponent } from './components/ghost-selection/ghost-selection.component';
import { ControlsComponent } from './components/controls/controls.component';
import { MainComponent } from './containers/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import {MqttModule} from 'ngx-mqtt';
import {MQTT_SERVICE_OPTIONS} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    GhostSelectionComponent,
    ControlsComponent,
    MainComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
      MqttModule.forRoot(MQTT_SERVICE_OPTIONS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
