import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  apiUrl = 'https://jsonplaceholder.typicode.com/users';
  getProduct(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
