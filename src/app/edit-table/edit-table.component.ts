import {Component, OnInit} from '@angular/core';
import {Passport} from '../models/Passport';
import {PassportHandlerService} from '../passport-handler.service';
import {PassportsWrap} from '../models/PassportsWrap';


@Component({
  selector: 'app-edit-table',
  templateUrl: 'edit-table.component.html',
  styleUrls: ['edit-table.component.css']
})

export class EditTableComponent implements OnInit{

  passportsWrap: PassportsWrap = new PassportsWrap();

  constructor(private passportHandlerService: PassportHandlerService) {
  }

  ngOnInit(): void {
    this.passportsWrap.setPassports(this.passportHandlerService.getPassports());
  }

  sendPassports(): void{
    this.passportHandlerService.setPassports(this.passportsWrap.getPassports());
  }

  deleteRow(id: number): void{
    this.passportsWrap.deletePassport(id);
    this.sendPassports();
  }

  addRow(): void{
    this.passportsWrap.addPassports([new Passport('xxx', 0)]);
    this.sendPassports();
  }

  upRow(index: number): void{
    if (index === 0){
      return;
    }

    const newPassports = this.passportsWrap.getPassports();
    const tempPassport: Passport = this.passportsWrap.getPassports()[index];
    newPassports.splice(index, 1);
    newPassports.splice(index - 1, 0, tempPassport);
    this.passportsWrap.setPassports(newPassports);
    this.sendPassports();
  }


  downRow(index: number): void{
    if (index === this.passportsWrap.getPassports().length){
      return;
    }

    const newPassports = this.passportsWrap.getPassports();
    const tempPassport: Passport = this.passportsWrap.getPassports()[index];
    newPassports.splice(index, 1);
    newPassports.splice(index + 1, 0, tempPassport);
    this.passportsWrap.setPassports(newPassports);
    this.sendPassports();

  }
}
