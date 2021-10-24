import {ActionReducerMap} from "@ngrx/store";
import {projectsDataNode,
  projectsDataReducer,
  ProjectsDataStateInterface} from "./reducers/projects-data.reducer";
import {searchNode,
  searchReducer,
  SearchStateInterface} from "./reducers/search.reducer";

export const projectsModuleNode = 'catalog-module'

export interface ProjectsRootStateInterface{
  [projectsDataNode]: ProjectsDataStateInterface,
  [searchNode]: SearchStateInterface,
}

export const projectsRootReducer: ActionReducerMap<ProjectsRootStateInterface> = {
  [projectsDataNode]: projectsDataReducer,
  [searchNode]: searchReducer,
}
