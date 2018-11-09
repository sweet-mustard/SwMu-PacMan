import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {
  @Output() directionChange: EventEmitter<number> = new EventEmitter();
  constructor() { }
  directions: number[] = [1, 2, 3, 4];
  changeDirection(direction) {
    this.directionChange.emit(direction);
  }
}
