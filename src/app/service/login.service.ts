import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../konstruktor/user';




@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public loginUser(user: User):Observable<object>{
    console.log(user);
    return this.http.post(`${this.apiServerUrl}/user/login`, user);
  }
  public addUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.apiServerUrl}/user/add`, user);
  }

  public getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiServerUrl}/user/all`);
  }
}
