import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup',
  templateUrl: './keyup.component.html',
  styleUrls: ['./keyup.component.scss']
})
export class KeyupComponent implements OnInit {
  values = '';

  constructor() { }

  ngOnInit() {
  }
  onKey(event: any) {
    this.values += event.target.value + ' | ';
  }
}
