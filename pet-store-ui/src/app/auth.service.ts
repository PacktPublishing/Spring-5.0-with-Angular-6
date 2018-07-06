import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  option = {
    headers: new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded'),
    withCredentials: true
  }

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const body = new HttpParams()
      .append("username", email)
      .append("password", password);

      return this.http.post<any>("http://localhost:8080/login", body.toString, this.option)
        .pipe(map((response) => {
          console.log("Success login!");
          return response;          
        }))
  }
}
