import { Injectable, signal } from '@angular/core';
import { playerInterface } from '../types/player.interface';

@Injectable({
  providedIn: 'root',
})
export class TicktockService {
  svgStringX = `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 384 512"
      fill="red"
    >
      <path
        d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
      />
    </svg>`;

  svgStringO = `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 448 512"
      fill="blue"
    >
      <path
        d="M224 96a160 160 0 1 0 0 320 160 160 0 1 0 0-320zM448 256A224 224 0 1 1 0 256a224 224 0 1 1 448 0z"
      />
    </svg>`;

  player1 = signal<playerInterface>({
    id: '1',
    icon: '',
    name: 'Player1',
    placedIcons: [],
  });

  player2 = signal<playerInterface>({
    id: '2',
    icon: '',
    name: 'Player2',
    placedIcons: [],
  });

  playerComputer = signal<playerInterface>({
    id: '3',
    icon: '',
    name: 'Computer',
    placedIcons: [],
  });

  activePlayer = signal<playerInterface>(this.player1());

  constructor() {}
}
