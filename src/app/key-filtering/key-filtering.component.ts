import { Component } from '@angular/core';

@Component({
  selector: 'app-key-filtering',
  templateUrl: './key-filtering.component.html',
  styleUrls: ['./key-filtering.component.scss']
})
export class KeyFilteringComponent {
  value = '';

  onEnter(value: string) { this.value = value; }
}
