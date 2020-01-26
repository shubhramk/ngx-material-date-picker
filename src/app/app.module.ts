import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatIconModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePickerModule } from './module/date-picker/date-picker.module';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    DatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
