import { Component, OnInit, signal } from '@angular/core';
import { TicktockService } from '../../services/ticktock.service';
import { playerInterface } from '../../types/player.interface';

@Component({
  selector: 'app-gameboard',
  standalone: false,
  templateUrl: './gameboard.component.html',
  styleUrl: './gameboard.component.scss',
})
export class GameboardComponent implements OnInit {
  dimension: string[] = ['1', '2', '3'];

  winingLines: string[][] = [
    ['11', '12', '13'],
    ['21', '22', '23'],
    ['31', '32', '33'],
    ['11', '21', '31'],
    ['12', '22', '32'],
    ['13', '23', '33'],
    ['11', '22', '33'],
    ['13', '22', '31'],
  ];

  player1: playerInterface = {
    id: '',
    icon: '',
    name: '',
    placedIcons: [],
  };

  player2: playerInterface = {
    id: '',
    icon: '',
    name: '',
    placedIcons: [],
  };

  activePlayer = signal<playerInterface>(this.player1);

  constructor(private service: TicktockService) {}

  ngOnInit(): void {
    this.player1 = this.service.player1();
    this.player2 = this.service.player2();
    this.activePlayer = this.service.activePlayer;
  }

  makeMove(row: string, column: string): void {
    const element = document.getElementById(
      `${row}${column}svg`
    ) as HTMLElement;

    if (element.innerHTML) {
      return;
    }

    element.innerHTML =
      this.service.activePlayer().icon === 'X'
        ? this.service.svgStringX
        : this.service.svgStringO;

    this.activePlayer().id == '1'
      ? this.player1.placedIcons.push(`${row}${column}`)
      : this.player2.placedIcons.push(`${row}${column}`);

    if (this.checkWinner(this.service.activePlayer())) {
      for (let i = 1; i <= this.dimension.length; i++) {
        for (let j = 1; j <= this.dimension.length; j++) {
          let id = `${i}${j}svg`;

          let element = document.getElementById(id) as HTMLElement;

          element.innerHTML =
            this.service.activePlayer().icon === 'X'
              ? this.service.svgStringX
              : this.service.svgStringO;
        }
      }

      (document.getElementById('winner') as HTMLElement).style.display = 'flex';

      this.activePlayer().icon == 'X'
        ? ((
            document.getElementById('winner') as HTMLElement
          ).style.backgroundColor = 'rgba(255, 0, 0, 0.8)')
        : ((
            document.getElementById('winner') as HTMLElement
          ).style.backgroundColor = 'rgba(0, 0, 255, 0.8)');

      this.activePlayer().icon == 'X'
        ? ((document.getElementById('active-name') as HTMLElement).style.color =
            'red')
        : ((document.getElementById('active-name') as HTMLElement).style.color =
            'blue');

      return;
    }

    this.switchPlayers();
  }

  switchPlayers() {
    this.service.activePlayer.set(
      this.service.activePlayer() === this.player1 ? this.player2 : this.player1
    );
  }

  checkWinner(player: playerInterface): boolean {
    let result = false;

    if (player.placedIcons.length >= 3) {
      this.winingLines.forEach((line) => {
        if (line.every((el) => player.placedIcons.includes(el))) {
          result = true;
        }
      });
    }

    return result;
  }
}
