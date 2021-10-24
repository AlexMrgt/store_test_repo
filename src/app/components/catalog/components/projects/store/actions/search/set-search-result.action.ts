import {createAction, props} from "@ngrx/store";
import {SearchActionsEnum} from "./search.actions.enum";

export interface SearchResultDataInterface{
  "userId": number,
  "id": number,
  "title": string,
}

export interface SetSearchDataResultActionPayloadInterface {
  searchResult: SearchResultDataInterface[],
}

export const setSearchDataResultAction = createAction(
  SearchActionsEnum.SetSearchResult,
  props<SetSearchDataResultActionPayloadInterface>(),
);
