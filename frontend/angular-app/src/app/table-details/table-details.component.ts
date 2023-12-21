import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Table } from '../models';

@Component({
  selector: 'test-table-details',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './table-details.component.html',
  styleUrl: './table-details.component.css',
})
export class TableDetailsComponent {
  @Input() table: Table | null = null;
}
