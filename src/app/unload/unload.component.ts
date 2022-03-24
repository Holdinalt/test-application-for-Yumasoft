import {Component, OnInit} from '@angular/core';
import {TableHandlerService} from '../Table-handler.service';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-unload',
  templateUrl: 'unload.component.html',
  styleUrls: ['unload.component.css']
})

export class UnloadComponent implements OnInit{

  passportsJSON: string;
  passportsCSV: string;

  separatorCSV = ',';

  constructor(private passportsHandlerService: TableHandlerService) {
  }

  setSeparator(separator: string): void{
    this.separatorCSV = separator;
    this.passportsCSV = this.passportsHandlerService.getPassportsCSV(this.separatorCSV);
  }


  ngOnInit(): void {
    if (this.passportsHandlerService.getRows() === []){
      this.passportsJSON = '[]';
      this.passportsCSV = '';
    } else {

      this.passportsJSON = this.passportsHandlerService.getPassportsJSON();
      this.passportsCSV = this.passportsHandlerService.getPassportsCSV(this.separatorCSV);
    }
  }


  save(passports: string, type: string): void{
    const blob = new Blob([passports]);
    saveAs(blob, 'passports.' + type);
  }



}
