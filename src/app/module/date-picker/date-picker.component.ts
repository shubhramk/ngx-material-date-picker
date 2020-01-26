import { Component, Input, HostListener, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { debounce } from './debounce.decorator';
import { DatePickerType, DATE_FORMAT } from './date-picker.enum';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-datepicker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {

  @ViewChild('picker', { static: false }) picker;
  public datePickerType = DatePickerType;
  public showDatePicker = false;
  public DATE_FORMAT = DATE_FORMAT;
  private _dateValue: any = null;
  /**
   * Set the type of datepicker i.e overlay / inline
   */

  @Input() type: DatePickerType = DatePickerType.OVERLAY;

  /**
   * Set the value of the date set by user, notice the underscore infront of the datevalue
   */
  @Output() dateValueChange: EventEmitter<any> = new EventEmitter<any>();
  @Input() set dateValue(value) {
    if (value !== this._dateValue) {
      this._dateValue = value;
    }
  }

  get dateValue() {
    if (this.type === this.datePickerType.INLINE) {
      return this.datePipe.transform(this._dateValue, this.DATE_FORMAT);
    } else if (this.type === this.datePickerType.DATERANGE_INLINE) {
      const startDate = this.datePipe.transform(this._dateValue.begin, this.DATE_FORMAT);
      const endDate = this.datePipe.transform(this._dateValue.end, this.DATE_FORMAT);
      const rangeStr = `${startDate} - ${endDate}`;
      return rangeStr;
    } else {
      return this._dateValue;
    }
  }


  /**
   * Placeholder value for the material control input
   */
  @Input() public placeholder: string = null;

  @Input() public minDate = null;



  @HostListener('window:scroll', [])
  @debounce()
  onWindowScroll() {
    if (this.picker) {
      this.picker.close();
    }
    this.showDatePicker = false;
  }


  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      if (this.type !== this.datePickerType.DATERANGE_INLINE
        && this.type !== this.datePickerType.DATERANGE_OVERLAY) {
        this.showDatePicker = false;
      }

    }
  }

  constructor(private elementRef: ElementRef, private datePipe: DatePipe) { }

  changeEvent(event: any) {
    this._dateValue = event.value || event;
    this.dateValueChange.emit(this._dateValue);
    if (this.type !== this.datePickerType.DATERANGE_INLINE
      && this.type !== this.datePickerType.DATERANGE_OVERLAY) {
      this.showDatePicker = false;
    }
  }
}