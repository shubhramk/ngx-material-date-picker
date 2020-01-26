import { Component, ViewEncapsulation } from '@angular/core';
import { DatePickerType } from './module/date-picker/date-picker.enum';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class AppComponent {
  public title = 'ngx-material-date-picker';
  public selectedDate = new Date('2019/09/26');
  public datePickerType  = DatePickerType;
  public date = {begin: new Date('2019/09/26'), end: new Date('2019/09/29')};
  constructor() { }
}
