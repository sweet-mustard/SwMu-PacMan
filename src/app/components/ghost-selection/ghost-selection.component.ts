import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-ghost-selection',
  templateUrl: './ghost-selection.component.html',
  styleUrls: ['./ghost-selection.component.css']
})
export class GhostSelectionComponent {
  ghosts = [{value: 'B', image: 'red.png'},
      {value: 'P', image: 'purple.png'},
      {value: 'I', image: 'orange.png'},
      {value: 'C', image: 'indigo.png'},
      {value: 'K', image: 'grey.png'},
      {value: 'S', image: 'green.png'}];
  selectedGhost = 'B';
  @Output() ghostSelected: EventEmitter<string> = new EventEmitter();
  constructor() { }
  selectGhost(selected) {
    this.selectedGhost = selected;
    this.ghostSelected.emit(this.selectedGhost);
  }
}
