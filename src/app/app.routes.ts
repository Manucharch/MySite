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
          import('./modules/about/about.module').then((c) => c.AboutModule),
      },
      {
        path: 'proj',
        loadChildren: () =>
          import('./modules/projects/projects.module').then(
            (c) => c.ProjectsModule
          ),
      },
    ],
  },
  {
    path: 'more',
    loadChildren: () =>
      import('./modules/more/more.module').then((c) => c.MoreModule),
    // children: [],
  },
  // {
  //   path: '**',
  //   redirectTo: 'home',
  //   pathMatch: 'full',
  // },
];
