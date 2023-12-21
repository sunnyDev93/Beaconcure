// Define the structure of an individual table
export interface Table {
  id?: string;
  title: string;
  rows: number;
  columns: number;
  notes: string;
}

// Define the structure of the JSON object that holds the array of tables
export interface TablesData {
  tables: Table[];
}
