import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Passport} from '../models/Passport';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  passports: Passport[];


}
