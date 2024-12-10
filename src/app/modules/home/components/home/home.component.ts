import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { MainService } from '../../../../services/main.service';
import { Subscription } from 'rxjs';
import { TitleService } from '../../../../services/title.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    // this.updateTitle();
    // this.languageChangeSubscription =
    //   this.translateService.onLangChange.subscribe(() => {
    //     this.updateTitle();
    //   });
  }

  ngOnDestroy(): void {}

  // private updateTitle(): void {
  //   this.translateService.get('header.home').subscribe((title) => {
  //     this.title.setTitle(title);
  //   });
  // }
}
