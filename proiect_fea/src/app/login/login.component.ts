import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { AuthService } from '../auth.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  
  ok = false;

  public users: any[] = [];

  loginUser: any = {
    username: '',
    password: ''
  };

  constructor(private formBuilder: FormBuilder, private router: Router, private _userService: UserService, private authService: AuthService, private _loginService: LoginService) {

  }

  ngOnInit(): void {
    this.users = this._userService.getUsers();
  }

  onSubmit() {
  this._loginService.login(this.loginUser.username, this.loginUser.password).subscribe(
    data => {
      console.log('Success!', data); 
      this.authService.login();
      this.router.navigate(['/offices']);
    },
    error => console.error('Error!', error)
  );
  }

  validateUser(username: string, password: string) {
    for(let i = 0; i < this.users.length; i++) {
      if(username === this.users[i].username && password === this.users[i].password) this.ok = true;
    }

    return this.ok;
  }
  
}