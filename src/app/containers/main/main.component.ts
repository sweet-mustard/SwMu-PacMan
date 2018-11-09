import { Component } from '@angular/core';
import {ConnectionService} from '../../connection.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  currentGhost = 'B';
  currentDirection = 1;

  constructor(private connectionService: ConnectionService) { }

  ghostSelected(event: string) {
    this.currentGhost = event;
      this.connectionService.sendCommand(this.currentGhost, this.currentDirection);
  }
  changeDirection(event: number) {
    this.currentDirection = event;
      this.connectionService.sendCommand(this.currentGhost, this.currentDirection);
  }

}
