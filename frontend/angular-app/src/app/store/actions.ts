// src/app/state/actions.ts

import { createAction, props } from '@ngrx/store';
import { Table } from '../models';

export const loadFiles = createAction('[Files] Load Files');
export const loadFilesSuccess = createAction(
  '[Files] Load Files Success',
  props<{ files: string[] }>()
);
export const loadTables = createAction(
  '[Tables] Load Tables',
  props<{ filename: string }>()
);
export const loadTablesSuccess = createAction(
  '[Tables] Load Tables Success',
  props<{ tables: Table[] }>()
);
