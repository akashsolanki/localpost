import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup} from '@angular/forms';
import {SignupserviceService} from '../signup/signupservice.service';
import {Signup} from '../signup/signup';
import { from } from 'rxjs';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  navbarOpen = false;
  regForm: FormGroup;
  datasaved:boolean= false;
  massage: string;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor(private formbuilder: FormBuilder, private signupservice:SignupserviceService
    ) { }

  ngOnInit(): void {
  }




  setFormState(): void {
    this.regForm = this.formbuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit() {
    
    let signup = this.regForm.value;

    this.createsignup(signup);
    this.regForm.reset();
  }

  createsignup(signup: Signup) {
    this.signupservice.createsignup(signup).subscribe(
      () => {
        this.datasaved = true;
        this.massage = "User Created";
       this.regForm.reset();
      }
    )
  }

}
