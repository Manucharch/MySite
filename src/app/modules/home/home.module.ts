import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { LangToggleComponent } from '../../components/lang-toggle/lang-toggle.component';
import { TranslateModule } from '@ngx-translate/core';
import { IntroComponent } from '../../components/intro/intro.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    LangToggleComponent,
    IntroComponent,
  ],
})
export class HomeModule {}
