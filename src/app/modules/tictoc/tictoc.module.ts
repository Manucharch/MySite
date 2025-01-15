import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TictocComponent } from './components/tictoc/tictoc.component';
import { GameInfoComponent } from './components/game-info/game-info.component';
import { FormsModule } from '@angular/forms';
import { GameboardComponent } from '../ticktock/components/gameboard/gameboard.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    TictocComponent,
    GameInfoComponent,
    GameBoardComponent,
    NavigationComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [TictocComponent],
})
export class TictocModule {}
