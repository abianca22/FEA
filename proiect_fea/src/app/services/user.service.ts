import { Injectable } from '@angular/core';
import * as usersJson from "../users.json";
import * as officesJson from "../offices.json";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  public offices = officesJson.offices;

  private users: any[] = usersJson.users;

  constructor() { }

  getUsers(): any[] { 
    return this.users;
  }

  getUserId(username: string): number {
    return this.getUsers().filter(user => user.username === username)[0].id;
  }

  getUserIdsFromOffice(officeId: number): number[] {
    console.log(`OfficeID ${officeId}`);
    return this.offices.filter(p => p.id === officeId)[0].users;
  }

  getUsersDetailsFromOffice(officeId: number): any[] {
    let userIds = this.getUserIdsFromOffice(officeId);
    console.log(`UsersLen ${userIds.length}`);
    console.log(this.getUsers().filter(p => userIds.includes(p.id)));
    return this.getUsers().filter(p => userIds.includes(p.id));
  }

  getOfficeForUserId(userId: number) {
    let findOffice = "";
    for(let office of this.offices) {
      let currentOffice = this.getUserIdsFromOffice(office.id).filter(p => p === userId);
      if(currentOffice !== undefined && currentOffice.length !== 0) {
        console.log(currentOffice);
        findOffice = office.name;
      }
    }
    return findOffice;
  }

  addUser(username: string | undefined | null, email: string | undefined | null, password: string | undefined | null) {
    this.users.push({id: this.users.length + 1, username: username, email: email, password: password});
    console.log(this.users);
  }
  }
