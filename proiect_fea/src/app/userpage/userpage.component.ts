import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrl: './userpage.component.scss'
})
export class UserpageComponent implements OnInit{
  
  public users: any[] = [];
  public mapUsers: Map<Number, string> = new Map<Number, string>();

  constructor(private _userService: UserService, private router: Router) {}
  
  ngOnInit(): void {
    this.users = this._userService.getUsers();
    for (let user of this.users) {
      let office = this._userService.getOfficeForUserId(user.id);
      this.mapUsers.set(user.id, office);
    }
  }

  onSelect(user: any) {
    console.log(user.id);
    this.router.navigate(['/profile', user.id]);
  }
}
