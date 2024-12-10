import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../../../components/header/header.component';
import { FooterComponent } from '../../../../components/footer/footer.component';
import { BluredBorderComponent } from '../../../../components/blured-border/blured-border.component';

@Component({
  selector: 'app-main',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    BluredBorderComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
