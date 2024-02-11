import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrl: './office.component.scss'
})
export class OfficeComponent {
@Input() office: any;
@Input() officeIndex: number = -1;
@Input() onClick: Function | undefined;

click(index: number): void {
  if(this.onClick) {
    console.log(index);
    console.log(typeof(index))
    this.onClick(index);
  }
}
}
