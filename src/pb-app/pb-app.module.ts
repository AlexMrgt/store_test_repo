import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PbAppComponent } from './pb-app.component';
import { MenuComponent } from './components/menu/menu.component';
import {RouterModule, Routes} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";


const routes:Routes = [
  // root link here: /
  {
    path: '',
    loadChildren: () => import('../app/app.module').then(m=>m.AppModule)
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
]

@NgModule({
  declarations: [
    PbAppComponent,
    MenuComponent,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  bootstrap:[
    PbAppComponent,
  ],
})
export class PbAppModule { }
