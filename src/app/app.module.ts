import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MobilePhoneComponent } from './mobile-phone/mobile-phone.component';
import { MobileButtonComponent } from './mobile-phone/mobile-button/mobile-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MobilePhoneComponent,
    MobileButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
