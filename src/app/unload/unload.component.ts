import {Component, OnInit} from '@angular/core';
import {PassportHandlerService} from '../passport-handler.service';
import {Passport} from '../models/Passport';
import { saveAs } from 'file-saver';
import { stringify} from 'csv-string';




@Component({
  selector: 'app-unload',
  templateUrl: 'unload.component.html'
})

export class UnloadComponent implements OnInit{

  passports: Passport[];

  passportsJSON: string;
  passportsCSV: string;

  constructor(private passportHandlerService: PassportHandlerService) {
  }

  ngOnInit(): void {
    this.passportHandlerService.currentMessage.subscribe(passports =>  this.passports = passports);
    if (this.passports == null){
      this.passportsJSON = '[]';
    } else {
      this.passportsJSON = JSON.stringify(this.passports);
      this.passportsCSV = this.fromPassportsToCSV(this.passports);
    }
  }


  save(passports: string): void{
    const blob = new Blob([passports]);
    saveAs(blob, 'passports.txt');
  }

  fromPassportsToCSV(passports: Passport[]): string{
    if (passports == null){
      return '[]';
    } else{
      const passString = passports[0].toStringArray(passports);
      return stringify(passString);
    }

  }


}
