import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang-toggle',
  imports: [FormsModule],
  templateUrl: './lang-toggle.component.html',
  styleUrl: './lang-toggle.component.scss',
})
export class LangToggleComponent implements OnInit {
  language = signal<string>('');

  constructor(private translate: TranslateService) {
    this.language.set(localStorage.getItem('language') || 'ge');
  }

  ngOnInit(): void {
    this.translate.use(this.language());
  }

  changeLanguage(language: string): void {
    this.language.set(language);
    localStorage.setItem('language', this.language());

    this.translate.use(this.language());
  }
}
