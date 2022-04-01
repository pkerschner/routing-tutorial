import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "http://localhost:65298/api/users"

  constructor(private http: HttpClient) { }

  list(): Observable<any[]> {
    return this.http.get(`${this.baseUrl}`) as Observable<any[]>;
  }

}
