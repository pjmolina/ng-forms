import { Component } from '@angular/core';

@Component({
  selector: 'app-with-blur',
  templateUrl: './with-blur.component.html',
  styleUrls: ['./with-blur.component.scss']
})
export class WithBlurComponent {
  cssFoco = 'sin-foco';

  value = '';
  update(value: string) {
    this.value = value;
    this.cssFoco = 'sin-foco';
  }

  onFocus() {
    this.cssFoco = 'con-foco';
  }
}
