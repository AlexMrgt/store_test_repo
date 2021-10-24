import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/catalog/components/projects/projects.component';
import {AppStoreModule} from "./app-store.module";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {AppRouterModule} from "./app-routing.module";
import { ImportComponent } from './components/import/import.component';

@NgModule({
  declarations: [
    AppComponent,
    ImportComponent,
  ],
  imports: [
    // BrowserModule,
    // HttpClientModule,
    // ReactiveFormsModule,
    AppRouterModule,
    AppStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
