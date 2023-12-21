import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Table } from './models';
import * as AppActions from './store/actions';
import * as AppSelectors from './store/selectors';
import { FileListComponent } from './file-list/file-list.component';
import { TableListComponent } from './table-list/table-list.component';
import { TableDetailsComponent } from './table-details/table-details.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FileListComponent,
    TableListComponent,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    TableDetailsComponent,
    MatGridListModule,
  ], // Add necessary imports here
  selector: 'test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-angular-app';
  files$ = this.store.select(AppSelectors.selectFiles());
  tables$ = this.store.select(AppSelectors.selectTables());

  selectedTable: Table | null = null;

  tables: Table[] = [];
  files: string[] = [];

  constructor(private store: Store) {} // Type the Store with AppState

  ngOnInit() {
    this.store.dispatch(AppActions.loadFiles());
  }

  onFileSelected(filename: string) {
    this.store.dispatch(AppActions.loadTables({ filename }));
    this.selectedTable = null;
  }

  onTableSelected(table: Table) {
    this.selectedTable = table;
  }
}
