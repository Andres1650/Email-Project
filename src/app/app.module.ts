import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { MailComponent } from './mail/mail.component';
import { BadgesDirective } from './badges.directive';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatBadgeModule, MatButtonModule, MatIconModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // CustomButtomComponent,
    CustomButtonComponent,
    MailComponent,
    BadgesDirective
  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
      // MatBadgeModule, MatButtonModule, MatIconModule,
      FormsModule,
      ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
