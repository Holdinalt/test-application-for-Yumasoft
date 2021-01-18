import {Component, OnInit} from '@angular/core';
import {Passport} from '../models/Passport';
import {PassportHandlerService} from '../passport-handler.service';


@Component({
  selector: 'app-edit-table',
  templateUrl: 'edit-table.component.html'
})

export class EditTableComponent implements OnInit{

  passports: Passport[];

  constructor(private passportHandlerService: PassportHandlerService) {
  }

  ngOnInit(): void {
    this.passportHandlerService.currentMessage.subscribe(passports =>  this.passports = passports);
  }

  sendPassports(): void{
    this.passportHandlerService.sendMessage(this.passports);
  }

  deleteRow(id: number): void{
    this.passports.splice(id, 1);
    this.sendPassports();
  }

  addRow(): void{
    const temp = new Passport('xxx', 0);
    if (this.passports == null){
      this.passports = [temp];
    } else{
      this.passports.push(temp);
    }

    this.sendPassports();
  }

  upRow(index: number): void{
    if (index === 0){
      return;
    }

    const temp: Passport = this.passports[index];
    this.passports.splice(index, 1);
    this.passports.splice(index - 1, 0, temp);
    this.sendPassports();

  }

  downRow(index: number): void{
    if (index === this.passports.length){
      return;
    }

    const temp: Passport = this.passports[index];
    this.passports.splice(index, 1);
    this.passports.splice(index + 1, 0, temp);
    this.sendPassports();

  }
}
