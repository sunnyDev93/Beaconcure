// src/app/state/app.effects.ts

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import * as AppActions from './actions';
import { DataService } from '../data.service';

@Injectable()
export class AppEffects {
  loadFiles$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppActions.loadFiles),
      exhaustMap(() =>
        this.dataService.getFiles().pipe(
          map((files) => AppActions.loadFilesSuccess({ files })),
          catchError(() => EMPTY)
        )
      )
    );
  });

  loadTables$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppActions.loadTables),
      exhaustMap((action) =>
        this.dataService.getTables(action.filename).pipe(
          map((tables) => AppActions.loadTablesSuccess({ tables })),
          catchError(() => EMPTY)
        )
      )
    );
  });

  constructor(private actions$: Actions, private dataService: DataService) {}
}
