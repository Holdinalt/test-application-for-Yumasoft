import {Component, OnInit} from '@angular/core';
import {PassportHandlerService} from '../passport-handler.service';
import { saveAs } from 'file-saver';
import {PassportsWrap} from '../models/PassportsWrap';




@Component({
  selector: 'app-unload',
  templateUrl: 'unload.component.html'
})

export class UnloadComponent implements OnInit{

  passportsWrap: PassportsWrap = new PassportsWrap();

  passportsJSON: string;
  passportsCSV: string;

  constructor(private passportHandlerService: PassportHandlerService) {
  }

  ngOnInit(): void {
    this.passportsWrap.setPassports(this.passportHandlerService.getPassports());

    if (this.passportsWrap.getPassports() == null){
      this.passportsJSON = '[]';
      this.passportsCSV = '';
    } else {
      this.passportsWrap.setPassports(this.passportsWrap.getPassports());
      this.passportsJSON = JSON.stringify(this.passportsWrap.getPassports());
      this.passportsCSV = this.passportsWrap.getPassportsCSV(',');
    }
  }


  save(passports: string, type: string): void{
    const blob = new Blob([passports]);
    saveAs(blob, 'passports.' + type);
  }



}
