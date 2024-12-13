import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  imports: [CommonModule],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss',
})
export class ClockComponent implements OnInit {
  hours: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  ngOnInit(): void {
    this.startClock();
  }

  startClock() {
    let second = 0;
    let minute = 0;
    let hour = 0;

    setInterval(() => {
      let d = new Date();

      second = d.getSeconds() * 6;
      minute = d.getMinutes() * 6;
      hour = d.getHours() * 30 + Math.round(minute / 2);
      document.getElementById('second-hand')!.style.transform =
        'rotate(' + second + 'deg)';
      document.getElementById('minute-hand')!.style.transform =
        'rotate(' + minute + 'deg)';
      document.getElementById('hour-hand')!.style.transform =
        'rotate(' + hour + 'deg)';
    }, 1000);
  }

  getHourStyle(hour: number) {
    const angle = hour * 30 - 90; // Start from the top (12 o'clock position)
    const radius = 200; // Adjust radius to fit numbers inside the dial
    return {
      transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
      position: 'absolute',
    };
  }
}
