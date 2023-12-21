// src/app/data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Table } from './models'; // Assuming you have a Table model defined

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:3000'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getFiles(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/files`);
  }

  getTables(filename: string): Observable<Table[]> {
    return this.http.get<Table[]>(`${this.apiUrl}/tables/${filename}`);
  }

  // Additional methods to interact with your server can be added here
}
