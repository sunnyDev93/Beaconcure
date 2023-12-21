import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { Table } from '../models';

import { MatExpansionModule } from '@angular/material/expansion';
import { TableDetailsComponent } from '../table-details/table-details.component';
@Component({
  selector: 'test-table-list',
  standalone: true,
  imports: [
    MatExpansionModule,
    TableDetailsComponent,
    CommonModule,
    MatListModule,
    MatCardModule,
  ],
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.css',
})
export class TableListComponent {
  @Input() tables: Table[] | null = null;
  @Output() tableSelected = new EventEmitter<Table>();

  selectedTable: Table | null = null;

  onSelectTable(table: Table) {
    this.selectedTable = table;
  }
}
