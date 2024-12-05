import { Component, OnInit, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(
    private titleService: Title,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.translateService.get('title.home').subscribe((title) => {
      this.titleService.setTitle(title);
    });
  }
}
