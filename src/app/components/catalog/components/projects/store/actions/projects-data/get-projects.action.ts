import {createAction} from "@ngrx/store";
import {ProjectsActionsEnum} from "./projects.actions.enum";

export const getProjectsAction = createAction(
  ProjectsActionsEnum.GetProjects,
)
