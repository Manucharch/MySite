import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-restart',
  standalone: false,
  templateUrl: './restart.component.html',
  styleUrl: './restart.component.scss'
})
export class RestartComponent {
  @Output() gameEndOutput: EventEmitter<string> = new EventEmitter();

  emitGameEnd(flag: string): void{
    this.gameEndOutput.emit();

    (document.getElementById('winner') as HTMLElement).style.display = 'none';
    (document.getElementById('tie') as HTMLElement).style.display = 'none';

    this.gameEndOutput.emit(flag)
  }
}
