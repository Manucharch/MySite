import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-style',
  standalone: false,
  templateUrl: './game-style.component.html',
  styleUrl: './game-style.component.scss',
})
export class GameStyleComponent {
  @Output() outputShowGamePad: EventEmitter<string> = new EventEmitter();

  gameStyle: string = 'player';

  setGameStyle(style: string): void {
    this.gameStyle = style;

    this.outputShowGamePad.emit(this.gameStyle);
  }
}
