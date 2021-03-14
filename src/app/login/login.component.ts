import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error = '';
  constructor(private _auth:AuthService, private _Router:Router) { }

  loginForm:FormGroup = new FormGroup({

    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9]{3,20}$')]),

  });

    submitForm(loginForm) {
      this._auth.login(loginForm.value).subscribe((response)=>{
        if(response.message === "success"){
          localStorage.setItem('current',response.token);
          this._auth.saveCurrentUser();
          this._Router.navigate(['/movies']);
        }else {
          this.error = response.message
        }
      })
    }

  ngOnInit(): void {
  }

}
