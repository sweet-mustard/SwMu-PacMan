import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ghostSelected(event: number) {
    console.log(event);
  }
  directionChange(event: string) {
    console.log(event);
  }

}
