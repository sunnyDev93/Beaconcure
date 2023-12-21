import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './state';
export const selectApp = createFeatureSelector<AppState>('app');
export const selectFiles = () =>
  createSelector(selectApp, (app: AppState) => app.files);

export const selectTables = () =>
  createSelector(selectApp, (app: AppState) => app.tables);
