import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpResponse } from '../model/http.response.interface';
import { User } from '../model/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private host = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<HttpResponse> {
    return this.http.get<HttpResponse>(`${this.host}/user/all`)
  }

  getUserByName(name: string): Observable<HttpResponse> {
    return this.http.get<HttpResponse>(`${this.host}/user/${name}`)
  }
  
  addUser(user: User): Observable<HttpResponse> {
    return this.http.post<HttpResponse>(`${this.host}/user/save`, user)
  }
}
