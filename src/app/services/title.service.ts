import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  constructor(
    private titleService: Title,
    private translateService: TranslateService,
    private router: Router
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateTitle();
      });

    this.translateService.onLangChange.subscribe(() => {
      this.updateTitle();
    });
  }

  updateTitle() {
    const currentUrl = this.router.url;
    const titleKey = this.getTitleKeyForUrl(currentUrl);

    this.translateService.get(titleKey).subscribe((title) => {
      this.titleService.setTitle(title);
    });
  }

  private getTitleKeyForUrl(url: string): string {
    switch (url) {
      case '/home':
        return 'header.home';
      case '/about':
        return 'header.about';
      case '/proj':
        return 'header.projects';
      case '/more':
        return 'header.more';
      default:
        return 'WebKey'; // Default title if no match
    }
  }
}
