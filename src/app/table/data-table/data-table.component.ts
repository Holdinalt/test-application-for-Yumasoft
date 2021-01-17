import {Component, Input} from '@angular/core';
import {Passport} from '../../models/Passport';


@Component({
  selector: 'app-table-data-table',
  templateUrl: 'data-table.component.html'
})

export class DataTableComponent{

  @Input() passports: Passport[];


}
