import { Component } from '@angular/core';
import { Professor } from '../domain/professor';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {

  topics = ['Computación Cuantica', 'Nanotecnologia',
    'Drones', 'Impresion 3D', 'Blockchain', 'Condensación de Fluzo avanzada'];

  model = new Professor(18, 'Dr Spin', this.topics[0], 1, new Date(Date.now()), 'Teruel');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Professor(42, '', '', 1, new Date(Date.now()), null);
  }

}
