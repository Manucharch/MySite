import { Routes } from '@angular/router';
import { MainComponent } from './modules/main/components/main/main.component';
import { HomeComponent } from './modules/home/components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      { path: 'home', component: HomeComponent },
      {
        path: 'about',
        loadChildren: () =>
          import('./modules/about/components/about/about.component').then(
            (c) => c.AboutComponent
          ),
      },
      {
        path: 'proj',
        loadChildren: () =>
          import(
            './modules/projects/components/projects/projects.component'
          ).then((c) => c.ProjectsComponent),
      },
    ],
  },
  {
    path: 'more',
    loadChildren: () =>
      import('./modules/more/components/more/more.component').then(
        (c) => c.MoreComponent
      ),
    // children: [],
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
