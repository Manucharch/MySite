import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  imports: [CommonModule],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss',
})
export class ClockComponent implements AfterViewInit {
  hours: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  mins = new Array(59).fill(null).map((_, i) => i + 1);

  ngAfterViewInit(): void {
    this.updateClock();
    setInterval(() => this.updateClock(), 1000);
  }

  updateClock(): void {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate angles
    const hourAngle = (hours % 12) * 30 + minutes * 0.5;
    const minuteAngle = minutes * 6;
    const secondAngle = seconds * 6;

    // Update styles of clock hands
    const hourArrow = document.querySelector('.houre-arrow') as HTMLElement;
    const minuteArrow = document.querySelector('.minute-arrow') as HTMLElement;
    const secondArrow = document.querySelector('.second-arrow') as HTMLElement;

    if (hourArrow && minuteArrow && secondArrow) {
      hourArrow.style.transform = `rotate(${hourAngle - 90}deg)`;
      minuteArrow.style.transform = `rotate(${minuteAngle - 90}deg)`;
      secondArrow.style.transform = `rotate(${secondAngle - 90}deg)`;
    }
  }

  getStyleForNumber(
    counter: number,
    radius: number,
    angelMultiplair: number,
    poss: string = 'absolute'
  ): {
    transform: string;
    position: string;
  } {
    const angle = counter * angelMultiplair - 90;

    const x = radius * Math.cos((angle * Math.PI) / 180);
    const y = radius * Math.sin((angle * Math.PI) / 180);

    return {
      transform: `translate(${x}px, ${y}px)`,
      position: poss,
    };
  }
}
