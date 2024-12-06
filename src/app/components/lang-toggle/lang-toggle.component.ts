import { Component } from '@angular/core';
import { MainService } from '../../services/main.service';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang-toggle',
  imports: [FormsModule],
  templateUrl: './lang-toggle.component.html',
  styleUrl: './lang-toggle.component.scss',
})
export class LangToggleComponent {
  language: string = '';

  constructor(
    private mainService: MainService,
    private translate: TranslateService
  ) {
    this.language = this.mainService.language;
  }

  changeLanguage(language: string): void {
    this.language = language;
    localStorage.setItem('language', this.language);

    this.translate.use(this.language);
  }
}
