import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { TicktockModule } from '../ticktock/ticktock.module';
import { ClockComponent } from '../../components/clock/clock.component';
import { DatePikerGeModule } from '../date-piker-ge/date-piker-ge.module';
import { TictocModule } from '../tictoc/tictoc.module';
import { TictocComponent } from '../tictoc/components/tictoc/tictoc.component';
import { EarthComponent } from '../../components/earth/earth.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
  },
  {
    path: 'tictoc',
    component: TictocComponent,
  },
];

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterOutlet,
    TicktockModule,
    ClockComponent,
    DatePikerGeModule,
    TictocModule,
    EarthComponent,
  ],
})
export class AboutModule {}
