import { Component } from '@angular/core';

@Component({
  selector: 'app-with-blur',
  templateUrl: './with-blur.component.html',
  styleUrls: ['./with-blur.component.scss']
})
export class WithBlurComponent {

  value = '';
  update(value: string) { this.value = value; }

}
