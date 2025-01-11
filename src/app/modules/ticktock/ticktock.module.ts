import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicktockComponent } from './components/ticktock/ticktock.component';
import { ChoseComponent } from './components/chose/chose.component';
import { FormsModule } from '@angular/forms';
import { GameboardComponent } from './components/gameboard/gameboard.component';
import { GameStyleComponent } from './components/game-style/game-style.component';
import { StartGameComponent } from './components/start-game/start-game.component';
import { NameIconComponent } from './components/name-icon/name-icon.component';

@NgModule({
  declarations: [
    TicktockComponent,
    ChoseComponent,
    GameboardComponent,
    GameStyleComponent,
    StartGameComponent,
    NameIconComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [TicktockComponent],
})
export class TicktockModule {}
