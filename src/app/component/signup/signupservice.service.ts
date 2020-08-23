import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observable, Observable}  from 'rxjs';
import {Signup} from './signup';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {
  createsignup(signup: Signup):Observable<Signup> {
    throw new Error("Method not implemented.");
    return this.http.post<Signup>(this.url+'api/users',signup)
    
  }
  url="http://localhost:51180/";

  constructor(private http:HttpClient) { }

  createuser(user:Signup):Observable<Signup>
  {
     return this.http.post<Signup>(this.url+'api/users',user)
  }
}
