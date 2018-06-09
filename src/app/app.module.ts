import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserInputComponent } from './user-input/user-input.component';
import { ClickMeComponent } from './click-me/click-me.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    ClickMeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
