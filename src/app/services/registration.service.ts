import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private http:HttpClient) { }

  public loginUserFronRemote(user: User):Observable<any>{

  return this.http.post<any>("http://localhost:8080/login",user)

}

public registerUserFromRemote(user:User):Observable<any>{
 return this.http.post<any>("http://localhost:8080/registration",user)



}



}