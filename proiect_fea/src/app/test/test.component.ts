import * as officeJson from "../offices.json";
import { Component } from '@angular/core';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent{
  public name: string = "NumeUtilizator";
  public offices: any = officeJson.offices;

  greetUser() {
    return "Bine ai venit, " + this.name;
  }

  onClick(officeIndex: number) {
    officeJson.offices[officeIndex].display = officeJson.offices[officeIndex].display ? false : true;
  }
}