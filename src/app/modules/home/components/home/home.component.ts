import { Component, OnDestroy, OnInit } from '@angular/core';
import { TitleService } from '../../../../services/title.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private titleService: TitleService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
