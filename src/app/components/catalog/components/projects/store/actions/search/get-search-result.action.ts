import {createAction} from "@ngrx/store";
import {SearchActionsEnum} from "./search.actions.enum";

export const getSearchResultAction = createAction(
  SearchActionsEnum.GetSearchResult,
)
