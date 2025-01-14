import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-game-info',
  standalone: false,
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss',
})
export class GameInfoComponent {
  title = signal<string>('Chose Game Style:');
  setStyle = signal<boolean>(true);
  setName = signal<boolean>(false);

  player1Name: string = 'Player1';
  player2Name: string = 'Player2';

  player1Icon: string = '';

  gameStyles: string[] = ['1', '2'];
  gameStyle: string = '';

  setGameStyle() {
    this.title.set('Player 1');
    this.setStyle.set(false);
    this.setName.set(true);
  }

  selectAll(event: FocusEvent | MouseEvent): void {
    const inputElement = event.target as HTMLInputElement;
    inputElement.select();
  }

  setPlayer1Name(): void {
    this.setName.set(false);
  }
}
