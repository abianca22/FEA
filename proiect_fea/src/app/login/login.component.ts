import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  
  signupUsers: any[] = [];
  signupObj: any = {
    username: '',
    email: '',
    password: ''
  };

  loginObj: any = {
    username: '',
    password: ''
  };

  signupForm = this.formBuilder.group({
    username: '',
    email: '',
    password: ''
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private _userService: UserService, private authService: AuthService) {

  }
  ngOnInit(): void {
    
  }

  onSubmit() {
    let ok: boolean = true;
    let formValue = this.signupForm.value;
    for(let user of this._userService.getUsers()) {
      if (user.username === formValue.username || user.email === formValue.email)
      ok = false;
    }
    if(ok) this._userService.addUser(this.signupForm.value.username, this.signupForm.value.email, this.signupForm.value.password);
    console.log(this._userService.getUsers());
    this.authService.login();
    this.router.navigate(['/offices']);
  }
}