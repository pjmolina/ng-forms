import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.scss']
})
export class ClickMeComponent implements OnInit {
  mensaje = '';

  constructor() { }

  ngOnInit() {
  }

  pulsado() {
    this.mensaje += 'Pulsado. ';

  }

}
