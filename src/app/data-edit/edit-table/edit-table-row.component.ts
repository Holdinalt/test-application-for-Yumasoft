import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Passport} from '../../models/Passport';


@Component({
  selector: 'app-edit-table-table-row',
  templateUrl: 'edit-table-row.component.html'
})

export class EditTableRowComponent{

  @Input() passport: Passport;

  @Output() delete = new EventEmitter<null>();

  deleteRow(): void{
    this.delete.emit();
  }
}
