import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerGEComponent } from './components/date-picker-ge/date-picker-ge.component';
import { FormsModule } from '@angular/forms';
import { GeorgianDateOutputPipe } from './pipes/georgian-date-output.pipe';
import { GeorgianDateInputDirective } from './directives/georgian-date-input.directive';
import { CalendarComponent } from './components/calendar/calendar.component';

@NgModule({
  declarations: [DatePickerGEComponent],
  imports: [
    CommonModule,
    FormsModule,
    GeorgianDateOutputPipe,
    GeorgianDateInputDirective,
    CalendarComponent,
  ],
  exports: [DatePickerGEComponent],
})
export class DatePikerGeModule {}
