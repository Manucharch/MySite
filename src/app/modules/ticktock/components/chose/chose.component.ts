import { Component, input, OnInit, output, signal } from '@angular/core';
import { TicktockService } from '../../services/ticktock.service';
import { playerInterface } from '../../types/player.interface';

@Component({
  selector: 'app-chose',
  standalone: false,
  templateUrl: './chose.component.html',
  styleUrl: './chose.component.scss',
})
export class ChoseComponent implements OnInit {
  idInp = input.required<string>();

  playerOutput = output<playerInterface>();

  constructor(private service: TicktockService) {}

  ngOnInit(): void {}

  setPlayer(event: Event, player: string): void {
    event.stopPropagation();

    let id = `${this.idInp()}svg`;

    const element1 = document.getElementById(id.slice(0, 2)) as HTMLElement;
    element1.style.display = 'none';

    const element = document.getElementById(id) as HTMLElement;

    if (player === 'X') {
      element.innerHTML = this.service.svgStringX;
    } else {
      element.innerHTML = this.service.svgStringO;
    }

    this.playerOutput.emit({
      id: '1',
      icon: player,
      name: 'Player 1',
      placedIcons: [id.slice(0, 2)],
    });
  }
}
