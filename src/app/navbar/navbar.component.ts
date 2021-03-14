import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogin:boolean = false;

  constructor(private _auth:AuthService , private _Router:Router) {
    _auth.currentuser.subscribe(()=>{
      if(_auth.currentuser.getValue() === null){
        this.isLogin = false;
      }else {
        this.isLogin = true;
      }
    })
   }
   logout() {
     this._auth.logout()
   }
  ngOnInit(): void {
  }

}
