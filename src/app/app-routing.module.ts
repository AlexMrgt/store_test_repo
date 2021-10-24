import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {NotFoundPageComponent} from "../pb-app/components/not-found-page/not-found-page.component";

const routes: Route[] = [

  // root link here: /
  {
    path: '',
    redirectTo: 'catalog',
  },
  {
    path: 'catalog',
    loadChildren: () => import('./components/catalog/catalog.module').then(m=>m.CatalogModule)
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRouterModule { }
