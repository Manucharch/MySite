import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './components/projects/projects.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { IntroComponent } from '../../components/intro/intro.component';
import { DaimondComponent } from '../../components/daimond/daimond.component';

const routes: Routes = [{ path: '', component: ProjectsComponent }];

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    IntroComponent,
    DaimondComponent,
  ],
})
export class ProjectsModule {}
