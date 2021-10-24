import {createFeatureSelector, createSelector} from "@ngrx/store";
import {projectsDataNode} from "../../reducers/projects-data.reducer";
import {projectsModuleNode, ProjectsRootStateInterface} from "../../projects.root-reducer";

export const selectFeatureData = createFeatureSelector<ProjectsRootStateInterface>(projectsModuleNode);

export const selectProjects = createSelector(
  selectFeatureData,
  (state: ProjectsRootStateInterface) => state[projectsDataNode].projects
);

