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

  // onKey(event: any) {  // version no tipada
  //   this.values += event.target.value + ' | ';
  // }

  onKey(event: KeyboardEvent) {  // version con tipos
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
}
