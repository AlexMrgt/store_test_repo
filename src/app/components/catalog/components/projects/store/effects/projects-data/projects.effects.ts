import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {pipe} from 'rxjs';
import {map, mergeMap, catchError, switchMap} from 'rxjs/operators';
import {DataLoaderService} from "../../../../../../../services/data-loader.service";
import {Store} from "@ngrx/store";
import {ProjectsActionsEnum} from "../../actions/projects-data";
import * as ProjectActions from '../../actions/projects-data';

@Injectable()
export class ProjectsEffects {

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectsActionsEnum.GetProjects),
      pipe(
        switchMap(() => {
          return this.projectLoader.loadData()
            .pipe(
              map(data => {
                const cutData = data.splice(0, 10);
                return ProjectActions.setProjectsAction({projects: cutData})
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
