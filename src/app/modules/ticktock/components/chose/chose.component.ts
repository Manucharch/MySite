import { Component, input, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-chose',
  standalone: false,
  templateUrl: './chose.component.html',
  styleUrl: './chose.component.scss',
})
export class ChoseComponent implements OnInit {
  idInp = input.required<string>();

  ngOnInit(): void {}

  setPlayer(player: string): void {
    console.log(player);

    let id = `wr${this.idInp()}`;

    const element = document.getElementById(id) as HTMLElement;

    element.innerHTML = player;
  }
}
