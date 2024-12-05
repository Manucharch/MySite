import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  constructor(
    private titleService: Title,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.translateService.get('title.projects').subscribe((title) => {
      this.titleService.setTitle(title);
    });
  }
}
