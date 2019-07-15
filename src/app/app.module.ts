import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';

import { MailComponent } from './mail/mail.component';
import { BadgesDirective } from './badges.directive';
import { OpenFormEventComponent } from './open-form-event/open-form-event.component';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatBadgeModule, MatButtonModule, MatIconModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DraftComponent } from './draft/draft.component';

export class BadgeOverviewExample {}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MailComponent,
    BadgesDirective,
    LoginComponent,
    DraftComponent,
    OpenFormEventComponent
  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
      MatBadgeModule, MatButtonModule, MatIconModule,
      FormsModule,
      ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
