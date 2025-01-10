import { Component, OnInit } from '@angular/core';
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

  activePlayer!: playerInterface;

  gameStarted: boolean = false;

  startNewGame: boolean = false;

  constructor(private service: TicktockService) {}

  ngOnInit(): void {
    this.service.activePlayer.set(this.player1);
  }

  startGame(): void {
    this.clearGamePad();
    this.startNewGame = true;
  }

  getPlayerInfo(player: playerInterface): void {
    this.player1 = player;

    this.player2 = {
      id: '2',
      icon: this.player1.icon === 'X' ? 'O' : 'X',
      name: 'Player 2',
      placedIcons: [],
    };

    this.service.activePlayer.set(this.player2);
  }

  makeMove(row: string, column: string): void {
    if (!this.startNewGame) {
      return;
    }

    const element = document.getElementById(
      `${row}${column}svg`
    ) as HTMLElement;

    if (element.innerHTML) {
      return;
    }

    if (!this.gameStarted) {
      const el = document.getElementById(`${row}${column}`) as HTMLElement;
      if (el) {
        el.style.display = 'flex';
      }
    }

    if (this.gameStarted) {
      element.innerHTML =
        this.service.activePlayer().icon === 'X'
          ? this.service.svgStringX
          : this.service.svgStringO;
    }

    this.service.activePlayer().id == '1'
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

      // let els = document.querySelectorAll('.pad');

      // els.forEach((el) => {
      //   el.innerHTML =
      //     this.service.activePlayer().icon === 'X'
      //       ? this.service.svgStringX
      //       : this.service.svgStringO;
      // });

      this.startNewGame = false;
    }

    this.switchPlayers();

    // console.log('active player - ' + this.service.activePlayer().name);

    // console.log('player1 - ' + JSON.stringify(this.player1));
    // console.log('player2 - ' + JSON.stringify(this.player2));

    this.gameStarted = true;
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

  clearGamePad(): void {
    for (let i = 1; i <= this.dimension.length; i++) {
      for (let j = 1; j <= this.dimension.length; j++) {
        let id = `${i}${j}svg`;

        let element = document.getElementById(id) as HTMLElement;

        element.innerHTML = '';
      }
    }

    this.player1 = {
      id: '',
      icon: '',
      name: '',
      placedIcons: [],
    };
    this.player2 = {
      id: '',
      icon: '',
      name: '',
      placedIcons: [],
    };

    this.gameStarted = false;

    this.startNewGame = false;
  }
}
