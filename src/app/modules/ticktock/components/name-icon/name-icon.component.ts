import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TicktockService } from '../../services/ticktock.service';

@Component({
  selector: 'app-name-icon',
  standalone: false,
  templateUrl: './name-icon.component.html',
  styleUrl: './name-icon.component.scss',
})
export class NameIconComponent {
  @Input() gameStyleInp: string = '';
  @Output() outputShowGamePad: EventEmitter<void> = new EventEmitter();

  showSetName: boolean = true;
  showSetIcon: boolean = false;
  showSetName2: boolean = false;

  name1: string = 'Player1';
  name2: string = 'Player2';

  constructor(private service: TicktockService) {}

  setName(name: string): void {
    this.name1 = name;
    this.service.player1.update((prev) => ({ ...prev, name: name }));
    this.showSetName = false;
    this.showSetIcon = true;
  }

  setName2(name: string): void {
    this.name2 = name;
    this.service.player2.update((prev) => ({ ...prev, name: name }));

    this.outputShowGamePad.emit();
  }

  setIcon(icon: string): void {
    this.service.player1.update((prev) => ({ ...prev, icon: icon }));
    this.service.player2.update((prev) => ({
      ...prev,
      icon: icon === 'X' ? 'O' : 'X',
    }));

    this.service.activePlayer.set(this.service.player1());

    this.showSetIcon = false;

    if (this.gameStyleInp === 'player') {
      this.showSetName2 = true;
    } else {
      this.outputShowGamePad.emit();
    }
  }
}
