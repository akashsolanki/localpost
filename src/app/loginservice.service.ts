import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observable,Observable} from 'rxjs';
import {Loginclass} from './loginclass';


@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  url="http//localhost:54868/";

  constructor( private http:HttpClient) { }
  createlogin(login:Loginclass):Observable<Loginclass>{
    return this.http.post<Loginclass>(this.url+'api/users/5',login)
  }

}
