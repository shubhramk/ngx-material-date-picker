import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  DateAdapter,
  MAT_DATE_FORMATS,
  MatIconModule
} from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from './format-datepicker';

import { DatePickerComponent } from './date-picker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';

@NgModule({
  declarations: [DatePickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    SatDatepickerModule,
    SatNativeDateModule
  ],
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
    DatePipe
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  exports: [DatePickerComponent]
})
export class DatePickerModule { }
