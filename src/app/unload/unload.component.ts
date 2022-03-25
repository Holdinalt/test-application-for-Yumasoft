import {Component, OnInit} from '@angular/core';
import {TableHandlerService} from '../Table-handler.service';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-unload',
  templateUrl: 'unload.component.html',
  styleUrls: ['unload.component.css']
})

export class UnloadComponent implements OnInit{

  rowsJSON: string;
  rowsCSV: string;

  separatorCSV = ',';

  constructor(private tableHandlerService: TableHandlerService) {
  }

  setSeparator(separator: string): void{
    this.separatorCSV = separator;
    this.rowsCSV = this.tableHandlerService.getRowsCSV(this.separatorCSV, '\\');
  }


  ngOnInit(): void {
    if (this.tableHandlerService.getRows() === []){
      this.rowsJSON = '[]';
      this.rowsCSV = '';
    } else {

      this.rowsJSON = this.tableHandlerService.getRowsJSON();
      this.rowsCSV = this.tableHandlerService.getRowsCSV(this.separatorCSV, '\\');
    }
  }


  save(rows: string, type: string): void{
    const blob = new Blob([rows]);
    saveAs(blob, 'data.' + type);
  }



}
