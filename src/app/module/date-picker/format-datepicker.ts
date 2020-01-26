import { Injector, Injectable } from '@angular/core';
import { NativeDateAdapter } from '@angular/material';
import { MatDateFormats } from '@angular/material/core';
import { DATE_FORMAT } from './date-picker.enum';
import { DatePipe } from '@angular/common';

export class AppDateAdapter extends NativeDateAdapter {

  format(date: Date, displayFormat: any): string {
    if (displayFormat === 'custom') {
      const datePipeEn: DatePipe = new DatePipe('en-US');
      return datePipeEn.transform(date , DATE_FORMAT );
    }
    return date.toDateString();
  }
}
export const APP_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
  },
  display: {
    dateInput: 'custom',
    monthYearLabel: { year: 'numeric', month: 'numeric' },
    dateA11yLabel: {
      year: 'numeric', month: 'long', day: 'numeric'
    },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
  }
};

