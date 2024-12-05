import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoreComponent } from './components/more/more.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: MoreComponent }];

@NgModule({
  declarations: [MoreComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MoreModule {}
