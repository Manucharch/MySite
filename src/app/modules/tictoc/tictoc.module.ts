import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TictocComponent } from './components/tictoc/tictoc.component';

@NgModule({
  declarations: [TictocComponent],
  imports: [CommonModule],
  exports: [TictocComponent],
})
export class TictocModule {}
