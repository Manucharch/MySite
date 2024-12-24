import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicktockComponent } from './components/ticktock/ticktock.component';
import { ChoseComponent } from './components/chose/chose.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TicktockComponent, ChoseComponent],
  imports: [CommonModule, FormsModule],
  exports: [TicktockComponent],
})
export class TicktockModule {}
