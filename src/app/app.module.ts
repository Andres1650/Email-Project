import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { MailComponent } from './mail/mail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // CustomButtomComponent,
    CustomButtonComponent,
    MailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
