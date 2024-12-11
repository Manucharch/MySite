import { Component, input, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-intro',
  imports: [TranslateModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent implements OnInit {
  title1Inp = input.required<string>();
  title2Inp = input.required<string>();

  srcInp = input.required<string>();
  subTitleInp = input.required<string>();

  constructor() {}

  ngOnInit(): void {}
}
