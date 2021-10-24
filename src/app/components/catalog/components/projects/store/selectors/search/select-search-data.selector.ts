import {createFeatureSelector, createSelector} from "@ngrx/store";
import {searchNode, SearchStateInterface} from "../../reducers/search.reducer";
import {projectsModuleNode, ProjectsRootStateInterface} from "../../projects.root-reducer";

export const selectFeatureData = createFeatureSelector<ProjectsRootStateInterface>(projectsModuleNode);

export const selectSearchResult = createSelector(
  selectFeatureData,
  (state: ProjectsRootStateInterface) => {
    return state[searchNode].searchData;
  }
);
