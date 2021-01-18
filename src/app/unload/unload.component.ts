import {Component, OnInit} from '@angular/core';
import {PassportHandlerService} from '../passport-handler.service';
import {Passport} from '../models/Passport';
import { saveAs } from 'file-saver';




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
    console.log(this.passports);
    if (this.passports == null){
      this.passportsJSON = '[]';
      this.passportsCSV = '';
    } else {
      const parser = new Passport('0', 0);
      this.passportsJSON = JSON.stringify(this.passports);
      this.passportsCSV = parser.parseToCSV(this.passports, ',');
    }
  }


  save(passports: string, type: string): void{
    const blob = new Blob([passports]);
    saveAs(blob, 'passports.' + type);
  }



}
