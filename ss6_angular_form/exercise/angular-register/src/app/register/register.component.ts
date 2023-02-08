import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../user';
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  @Output() userSubmit = new EventEmitter()
  userForm: FormGroup;
  countryList = [
    {id: 1, name: 'Đà Nẵng'},
    {id: 2, name: 'Sài Gòn'},
    {id: 4, name: 'Hà Nội'}
  ];

  constructor() {
    this.userForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.pattern('[\\w]+[@][\\w]+.[\\w]+')]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
        country: new FormControl('', [Validators.required]),
        age: new FormControl('', [Validators.required, Validators.min(18)]),
        gender: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')])
      }
    );
  }

  ngOnInit(): void {
  }

  createUser() {
    console.log(this.userForm);
    if(this.userForm.valid){
      this.userSubmit.emit(this.userForm.value)
    }
  }
}
