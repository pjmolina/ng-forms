import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserInputComponent } from './user-input/user-input.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { KeyupComponent } from './keyup/keyup.component';
import { LoopBackComponent } from './loop-back/loop-back.component';
import { KeyFilteringComponent } from './key-filtering/key-filtering.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    ClickMeComponent,
    KeyupComponent,
    LoopBackComponent,
    KeyFilteringComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
