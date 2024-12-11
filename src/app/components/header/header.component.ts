import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { LangToggleComponent } from '../lang-toggle/lang-toggle.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, TranslateModule, CommonModule, LangToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isHiden: boolean = true;

  toggle(): void {
    this.isHiden = !this.isHiden;
  }
}
