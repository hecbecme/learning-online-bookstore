import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseURL = '';

  constructor(
    private httpClient: HttpClient
   ) { }
}
