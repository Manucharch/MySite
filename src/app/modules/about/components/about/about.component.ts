import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { TitleService } from '../../../../services/title.service';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  constructor(
    private titleService: TitleService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    // this.translateService.get('header.about').subscribe((title) => {
    //   this.titleService.setTitle(title);
    // });
  }
}
