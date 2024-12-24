import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { TicktockModule } from '../ticktock/ticktock.module';

const routes: Routes = [{ path: '', component: AboutComponent }];

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, RouterModule.forChild(routes), TicktockModule],
})
export class AboutModule {}
