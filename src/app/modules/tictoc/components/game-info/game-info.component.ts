import { Component, output, signal } from '@angular/core';
import { TictocService } from '../../services/tictoc.service';

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
  setName2 = signal<boolean>(false);

  closeInfoOutput = output<string>();

  player1Name: string = 'Player1';
  player2Name: string = 'Player2';

  player1Icon: string = '';

  gameStyles: string[] = ['1', '2'];
  gameStyle: string = '';

  constructor(private service: TictocService) {}

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
    this.service.player1.update((prev) => ({
      ...prev,
      name: this.player1Name,
      icon: this.player1Icon,
    }));

    if (this.gameStyle == '2') {
      this.service.player2.update((prev) => ({
        ...prev,
        name: 'Computer',
        icon: this.player1Icon == 'X' ? 'O' : 'X',
      }));

      this.closeInfoOutput.emit('start');
    } else if (this.gameStyle == '1') {
      this.title.set('Player2');
      this.setName2.set(true);

      // this.setPlayer2Name();
    }

    this.setName.set(false);
  }

  setPlayer2Name(): void {
    this.service.player2.update((prev) => ({
      ...prev,
      name: this.player2Name,
    }));

    this.setName.set(false);

    this.setName2.set(false);

    this.closeInfoOutput.emit('start');
  }

  getQuiteGame(): void {
    this.closeInfoOutput.emit('end');
  }

  getGoBack(): void {
    // title = signal<string>('Chose Game Style:');
    // setStyle = signal<boolean>(true);
    // setName = signal<boolean>(false);
    // setName2 = signal<boolean>(false);

    if (this.setName2()) {
      this.setName2.set(false);

      this.title.set(this.service.player1().name);
      this.setName.set(true);
    } else if (this.setName()) {
      this.setName.set(false);
      this.setStyle.set(true);
      this.title.set('Chose Game Style:');
    } else if (this.setStyle()) {
      this.closeInfoOutput.emit('end');
    }
  }
}
