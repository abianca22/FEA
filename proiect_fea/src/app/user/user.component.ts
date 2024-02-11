import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit{

  @Input() officeId: number = -1;
  public users: any[] = [];
  public usersFromOffice: any[] = [];
  public noUsers: boolean = false;

  constructor(private _userService: UserService) {

  }

  ngOnInit(): void {
  this.users = this._userService.getUsers();
  this.usersFromOffice = this._userService.getUsersDetailsFromOffice(this.officeId);
  if (this.usersFromOffice === undefined || this.usersFromOffice.length === 0) {
    this.noUsers = true;
  }
}
}
