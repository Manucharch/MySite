import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-start-game',
  standalone: false,
  templateUrl: './start-game.component.html',
  styleUrl: './start-game.component.scss',
})
export class StartGameComponent {
  @Output() showChose: EventEmitter<void> = new EventEmitter();

  emitShowChose(): void {
    this.showChose.emit();
  }
}
