import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainModule } from './modules/main/main.module';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainModule, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
