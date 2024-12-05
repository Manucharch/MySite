import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  constructor(
    private titleService: Title,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.translateService.get('title.about').subscribe((title) => {
      this.titleService.setTitle(title);
    });
  }
}
