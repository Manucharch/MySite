import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainModule } from './modules/main/main.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainModule, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    public translate: TranslateService,
    private mainService: MainService
  ) {
    this.mainService.language = localStorage.getItem('language') || 'ge';
    this.translate.use(mainService.language);
  }
}
