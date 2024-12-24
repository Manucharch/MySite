import { Component } from '@angular/core';
import { GameObjectInterface } from '../../types/gameObject.interface';

@Component({
  selector: 'app-ticktock',
  standalone: false,
  templateUrl: './ticktock.component.html',
  styleUrl: './ticktock.component.scss',
})
export class TicktockComponent {
  rows: string[] = ['1', '2', '3'];
  columns: string[] = ['a', 'b', 'c'];

  // displayValue: string = 'none';

  gameStarted: boolean = false;

  // showChose: boolean = false;

  startGame(row: string, column: string): void {
    if (!this.gameStarted) {
      console.log(`${row}${column}`);
      const element = document.getElementById(`${row}${column}`) as HTMLElement;
      if (element) {
        element.style.display = 'flex';
      }

      this.gameStarted = true;
    }
  }

  getClose() {}
}
