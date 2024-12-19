import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { DatePikerGeModule } from '../date-piker-ge/date-piker-ge.module';
import { ClockComponent } from '../../components/clock/clock.component';

const routes: Routes = [{ path: '', component: AboutComponent }];

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DatePikerGeModule,
    ClockComponent,
  ],
})
export class AboutModule {}
