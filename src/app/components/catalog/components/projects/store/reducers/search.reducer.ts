import {createReducer, on} from "@ngrx/store";

import * as SearchActions from '../actions/search';
import {SearchResultDataInterface} from "../actions/search";

export const searchNode = 'search';

export interface SearchStateInterface {
  searchData: SearchResultDataInterface[],

  isErrorOnLoad:boolean,
  errorMessage: string,
}

const initialState: SearchStateInterface = {
  searchData: [],
  isErrorOnLoad: false,
  errorMessage:'',
}

export const searchReducer = createReducer(
  initialState,
  on(SearchActions.getSearchResultAction, (state) => {

    return {
      ...state,
    }
  }),

  on(SearchActions.setSearchDataResultAction, (state, {searchResult}) => {

    return {
      ...state,
      searchData: searchResult,
    }
  }),
)
