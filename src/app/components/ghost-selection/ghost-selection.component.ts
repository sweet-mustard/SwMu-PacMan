import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-ghost-selection',
  templateUrl: './ghost-selection.component.html',
  styleUrls: ['./ghost-selection.component.css']
})
export class GhostSelectionComponent {
  ghosts: string[] = ['B', 'P', 'I', 'C', 'K', 'S'];
  selectedGhost = 'B';
  @Output() ghostSelected: EventEmitter<string> = new EventEmitter();
  constructor() { }
  selectGhost(selected) {
    this.selectedGhost = selected;
    this.ghostSelected.emit(this.selectedGhost);
  }
}
