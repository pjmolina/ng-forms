import { Component } from "@angular/core";

@Component({
  selector: "app-keyup",
  templateUrl: "./keyup.component.html",
  styleUrls: ["./keyup.component.scss"],
})
export class KeyupComponent {
  values = "";

  // onKey(event: any) {  // version no tipada
  //   console.log(event.key);
  //   this.values += event.target.value + ' | ';
  // }

  onKey(event: KeyboardEvent) {
    // version con tipos
    this.values += (<HTMLInputElement>event.target).value + " | ";
  }
}
