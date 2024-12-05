import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainModule } from './modules/main/main.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'MySite';
}
