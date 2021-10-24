import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CatalogRoutingModule} from "./catalog-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CatalogComponent} from "./catalog.component";



@NgModule({
  declarations: [
    CatalogComponent,
  ],
  imports: [
    CatalogRoutingModule,
  ],
})
export class CatalogModule { }
