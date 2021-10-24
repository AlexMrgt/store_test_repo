import {createReducer, on} from "@ngrx/store";

import * as ProjectActions from '../actions/projects-data';
import {ProjectItemInterface} from "../interfaces/project-item.interface";


export const projectsDataNode = 'catalog-data';

export interface ProjectsDataStateInterface {
  projects: ProjectItemInterface[],

  isErrorOnLoad :boolean,
  errorMessage: string,
}

const initialProjectsDataState: ProjectsDataStateInterface = {
  projects: [],
  isErrorOnLoad: false,
  errorMessage:'',
}

export const projectsDataReducer = createReducer(
  initialProjectsDataState,
  on(ProjectActions.getProjectsAction, (state) => {

    return {
      ...state,
    }
  }),

  on(ProjectActions.setProjectsAction, (state, {projects}) => {

    console.log(projects);
    return {
      ...state,
      projects: [...projects],
    }
  }),
)
