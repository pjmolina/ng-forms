import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Professor } from "../domain/professor";

@Component({
  selector: "app-template-driven-form",
  templateUrl: "./template-driven-form.component.html",
  styleUrls: ["./template-driven-form.component.scss"],
  // providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})
export class TemplateDrivenFormComponent {
  topics = [
    { code: 1, label: "Computación Cuantica" },
    { code: 3, label: "Drones" },
    { code: 4, label: "Impresion 3D" },
    { code: 5, label: "Blockchain" },
    { code: 6, label: "Condensación de Fluzo avanzada" },
  ];

  model = new Professor(
    18,
    "Dr Spin",
    this.topics[0].code,
    this.topics[1].label,
    this.topics[2],
    1,
    new Date(Date.now()),
    "Teruel"
  );

  submitted = false;

  onSubmit() {
    this.submitted = true;
    // send to server ...
  }

  newProfessor() {
    this.model = new Professor(
      42,
      "",
      this.topics[0].code,
      this.topics[1].label,
      this.topics[2],
      1,
      new Date(Date.now()),
      null
    );
  }

  depura(v) {
    console.log(v);
  }

  nameIsEmpty(name: FormControl): boolean {
    return !!name.errors?.required;
  }
  nameIsForbidden(name: FormControl): boolean {
    return <boolean>name.errors?.forbiddenName;
  }
}
