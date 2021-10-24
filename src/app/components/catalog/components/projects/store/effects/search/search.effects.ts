import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {pipe} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {DataLoaderService} from "../../../../../../../services/data-loader.service";
import {Store} from "@ngrx/store";

import * as SearchActions from "../../actions/search";
import {SearchActionsEnum} from "../../actions/search";

@Injectable()
export class SearchEffects {

  searchData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActionsEnum.GetSearchResult),
      pipe(
        switchMap(() => {
          return this.projectLoader.searchSomeData()
            .pipe(
              map(data => {
                const cutData = data.splice(0, 10);
                return SearchActions.setSearchDataResultAction({searchResult:cutData})
              })
            )
        })
      )
    )
  );

  constructor(
    private store$: Store,
    private actions$: Actions,
    private projectLoader: DataLoaderService,
  ) {
  }
}
