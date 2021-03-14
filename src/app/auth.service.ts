import { Router } from '@angular/router';
import { Observable ,BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentuser = new BehaviorSubject(null);
  constructor(private _HttpClient: HttpClient , private _Router:Router) {
    if(localStorage.getItem('current')){
      this.saveCurrentUser()
    }
   }

  register(formData: object): Observable<any> {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup', formData)
  }
  login(formData: object): Observable<any> {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin', formData)
  }
  saveCurrentUser() {
    let encodedData = localStorage.getItem('current')
    let decodedData = jwtDecode(encodedData);
    this.currentuser.next(decodedData);
  }

  logout(){
    this.currentuser.next(null);
    localStorage.removeItem('current');
    this._Router.navigate(['/login'])
  }
}
