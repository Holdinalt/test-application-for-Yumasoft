import {Component, OnInit} from '@angular/core';
import {PassportsHandlerService} from '../passports-handler.service';
import { saveAs } from 'file-saver';
import {PassportsWrap} from '../models/PassportsWrap';




@Component({
  selector: 'app-unload',
  templateUrl: 'unload.component.html',
  styleUrls: ['unload.component.css']
})

export class UnloadComponent implements OnInit{

  passportsJSON: string;
  passportsCSV: string;

  constructor(private passportsHandlerService: PassportsHandlerService) {
  }

  ngOnInit(): void { // TODO
    // this.passportsWrap.setPassports(this.passportHandlerService.getPassports());
    // this.passportsWrap.setPassports(this.passportsWrap.getPassports());
    //
    if (this.passportsHandlerService.getPassports() === []){
      this.passportsJSON = '[]';
      this.passportsCSV = '';
    } else {

      this.passportsJSON = this.passportsHandlerService.getPassportsJSON();
    //   this.passportsCSV = this.passportsWrap.getPassportsCSV(',');
    }
  }


  save(passports: string, type: string): void{
    const blob = new Blob([passports]);
    saveAs(blob, 'passports.' + type);
  }



}
