// src/app/state/reducers.ts

import { createReducer, on } from '@ngrx/store';
import * as AppActions from './actions';
import { AppState } from './state';

export const initialState: AppState = {
  files: [],
  selectedFile: null,
  tables: [],
};

export const appReducer = createReducer(
  initialState,
  on(
    AppActions.loadFilesSuccess,
    (state, { files }): AppState => ({ ...state, files })
  ),
  on(
    AppActions.loadTables,
    (state, { filename }): AppState => ({
      ...state,
      selectedFile: filename,
    })
  ),
  on(
    AppActions.loadTablesSuccess,
    (state, { tables }): AppState => ({
      ...state,
      tables,
    })
  )
);
