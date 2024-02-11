import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  _url = 'http://localhost:3000/offices';
  constructor(private _http: HttpClient) { }

  login(user: string, pass: string) {
    return this._http.post<any>(this._url, {username: user, password: pass});
  }
}
