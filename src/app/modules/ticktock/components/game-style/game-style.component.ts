import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-style',
  standalone: false,
  templateUrl: './game-style.component.html',
  styleUrl: './game-style.component.scss',
})
export class GameStyleComponent {
  @Output() outputShowNameIcon: EventEmitter<string> = new EventEmitter();

  gameStyle: string = 'player';

  setGameStyle(style: string): void {
    this.gameStyle = style;

    this.outputShowNameIcon.emit(this.gameStyle);
  }
}
