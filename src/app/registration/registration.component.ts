import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

    error = '';
  constructor(private _auth:AuthService, private _Router:Router) { }

  rgisterForm:FormGroup = new FormGroup({

    first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    age: new FormControl(null, [Validators.required, Validators.min(10), Validators.max(90)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9]{3,20}$')]),

  });

    submitForm(rgisterForm) {
      this._auth.register(rgisterForm.value).subscribe((response)=>{
        if(response.message === "success"){
          this._Router.navigate(['/login'])
        }else {
          this.error = response.message
        }
      })
    }














  ngOnInit(): void {
  }

}
