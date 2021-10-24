import { NgModule } from '@angular/core';
import {Route, RouterModule} from "@angular/router";

const routes: Route[] = [
  // root link here: /catalog

  {
    path: '',
    redirectTo: 'projects',
    pathMatch: 'full',
  },
  {
    path: 'projects',
    loadChildren: () => import('./components/projects/projects.module').then(m=>m.ProjectsModule),
  },
  // {
  //   path: 'project/:id',
  //   loadChildren: () => import('').then(m=>m.ProjectModule)
  // },
  // {
  //   path: 'house/:id',
  //   loadChildren: () => import('').then(m=>m.HouseModule)
  // },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class CatalogRoutingModule { }
