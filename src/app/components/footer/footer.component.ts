import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CircleanimationComponent } from '../circleanimation/circleanimation.component';

@Component({
  selector: 'app-footer',
  imports: [TranslateModule, CircleanimationComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
