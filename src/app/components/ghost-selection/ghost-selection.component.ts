import {Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-ghost-selection',
  templateUrl: './ghost-selection.component.html',
  styleUrls: ['./ghost-selection.component.css']
})
export class GhostSelectionComponent {
  ghosts: number[] = [1, 2, 3, 4, 5, 6];
  selectedGhost = 1;
  ghostSelected = new EventEmitter();
  constructor() { }
  selectGhost(selected) {
    this.selectedGhost = selected;
    this.ghostSelected.emit(this.selectedGhost);
  }
}
