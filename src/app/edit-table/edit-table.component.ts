import {Component, OnInit} from '@angular/core';
import {Row} from '../models/Row';
import {TableHandlerService} from '../Table-handler.service';


@Component({
  selector: 'app-edit-table',
  templateUrl: 'edit-table.component.html',
  styleUrls: ['edit-table.component.css']
})

export class EditTableComponent implements OnInit{

  ngOnInit(): void {
  }

  constructor(public tableHandlerService: TableHandlerService) {

  }

  updateInfo(row: number, col: string, event: any): void{
    this.tableHandlerService.changeInfo(row, col, event.target.value);
  }

  addRow(): void{
    this.tableHandlerService.addRow(new Row(new Map<string, string>()));
  }



}
