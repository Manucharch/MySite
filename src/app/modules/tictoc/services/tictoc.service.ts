import { Injectable, signal } from '@angular/core';
import { playerInterface } from '../types/player.interface';

@Injectable({
  providedIn: 'root',
})
export class TictocService {
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

  constructor() {}
}
