import { NgModule } from '@angular/core';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {projectsModuleNode, projectsRootReducer} from "./store/projects.root-reducer";
import {ProjectsEffects} from "./store/effects/projects-data/projects.effects";
import {SearchEffects} from "./store/effects/search/search.effects";

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(projectsModuleNode, projectsRootReducer),
    EffectsModule.forFeature([
      ProjectsEffects,
      SearchEffects,
    ])
  ],
  exports:[
    StoreModule,
  ]
})
export class ProjectsStoreModule { }
