import { NgModule } from '@angular/core';
import {ProjectsComponent} from "./projects.component";
import {AddProjectCardComponent} from "./components/add-project-card/add-project-card.component";
import {AddProjectFormComponent} from "./components/add-project-form/add-project-form.component";
import {SearchComponent} from "./components/search/search.component";
import {ProjectsStoreModule} from "./projects-store.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ProjectCardComponent} from "./components/project-card/project-card.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    pathMatch: 'full',
  }
]

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectCardComponent,
    AddProjectCardComponent,
    AddProjectFormComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    ProjectsStoreModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],

})
export class ProjectsModule { }
