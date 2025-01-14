import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TictocComponent } from './components/tictoc/tictoc.component';
import { GameInfoComponent } from './components/game-info/game-info.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TictocComponent, GameInfoComponent],
  imports: [CommonModule, FormsModule],
  exports: [TictocComponent],
})
export class TictocModule {}
