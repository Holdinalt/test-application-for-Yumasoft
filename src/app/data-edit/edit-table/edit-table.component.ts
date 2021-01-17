import {Component, Input, OnInit} from '@angular/core';
import {Passport} from '../../models/Passport';
import {PassportHandlerService} from '../../passport-handler.service';


@Component({
  selector: 'app-edit-table-table',
  templateUrl: 'edit-table.component.html'
})

export class EditTableComponent implements OnInit{

  constructor(private passportHandlerService: PassportHandlerService) {
  }

  ngOnInit(): void {
    this.passportHandlerService.currentMessage.subscribe(passports =>  this.passports = passports);
  }

  sendPassports(): void{
    this.passportHandlerService.sendMessage(this.passports);
  }

  passports: Passport[] = [new Passport('dan', 2000)];

  deleteRow(id: number): void{
    this.passports.splice(id, 1);
    this.sendPassports()
  }
}
