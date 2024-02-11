import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit {
  public userId: any = undefined;
  public users: any[] = [];
  public findUserById: any;
  public mapUsers: Map<Number, string> = new Map<Number, string>();

  constructor(private route: ActivatedRoute, private _userService: UserService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.userId = (id !== null)? parseInt(id): -1;
    this.users = this._userService.getUsers();
    this.findUserById = this.users.filter(p => p.id === this.userId)[0];
    for (let user of this.users) {
      let office = this._userService.getOfficeForUserId(user.id);
      this.mapUsers.set(user.id, office);
    }
  }
}