// src/app/state/app.state.ts

import { Table } from '../models';

export interface AppState {
    files: string[];
    selectedFile: string | null;
    tables: Table[];
}
