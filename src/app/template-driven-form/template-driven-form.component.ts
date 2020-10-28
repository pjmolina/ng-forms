import { Component } from '@angular/core';
import { Professor } from '../domain/professor';
import { ForbiddenValidatorDirective } from './ForbiddenValidatorDirective';
import { NG_VALIDATORS } from '@angular/forms';


@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
  // providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})
export class TemplateDrivenFormComponent {

  topics = [
    {code: 1,  label: 'Computación Cuantica', selected: false },
    {code: 2, label: 'Nanotecnologia', selected: false },
    {code: 3, label: 'Drones', selected: false },
    {code: 4, label: 'Impresion 3D' , selected: false},
    {code: 5, label: 'Blockchain' , selected: false},
    {code: 6, label: 'Condensación de Fluzo avanzada', selected: false }
  ];

  model = new Professor(18, 'Dr Spin', this.topics[0].code, 1, new Date(Date.now()), 'Teruel');

  submitted = false;

  onSubmit() {
    this.submitted = true;
    // send to server ...
  }

  newProfessor() {
    this.model = new Professor(42, '', null, 1, new Date(Date.now()), null);
  }

  depura(v) {
    console.log(v);
  }
  setTopic(topic: any) {
    this.model.topic = topic.code;
  }

}
