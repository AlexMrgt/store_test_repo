import {createAction, props} from "@ngrx/store";
import {ProjectsActionsEnum} from "./projects.actions.enum";
import {ProjectItemInterface} from "../../interfaces/project-item.interface";

export interface SetProjectsActionPayloadInterface {
  projects: ProjectItemInterface[],
}

export const setProjectsAction = createAction(
  ProjectsActionsEnum.SetProjects,
  props<SetProjectsActionPayloadInterface>(),
)
