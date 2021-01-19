import {Component, OnInit} from '@angular/core';
import {PassportHandlerService} from '../passport-handler.service';
import { saveAs } from 'file-saver';
import {PassportsWrap} from '../models/PassportsWrap';




@Component({
  selector: 'app-unload',
  templateUrl: 'unload.component.html',
  styleUrls: ['unload.component.css']
})

export class UnloadComponent implements OnInit{

  passportsWrap: PassportsWrap = new PassportsWrap();

  passportsJSON: string;
  passportsCSV: string;

  constructor(private passportHandlerService: PassportHandlerService) {
  }

  ngOnInit(): void {
    this.passportsWrap.setPassports(this.passportHandlerService.getPassports());
    this.passportsWrap.setPassports(this.passportsWrap.getPassports());

    if (this.passportsWrap.getPassports() == null){
      this.passportsJSON = '[]';
      this.passportsCSV = '';
    } else {

      this.passportsJSON = this.passportsWrap.getPassportsJSON();
      this.passportsCSV = this.passportsWrap.getPassportsCSV(',');
    }
  }


  save(passports: string, type: string): void{
    const blob = new Blob([passports]);
    saveAs(blob, 'passports.' + type);
  }



}
