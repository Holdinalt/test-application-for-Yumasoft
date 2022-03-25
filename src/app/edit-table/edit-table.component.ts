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

  changeColumnName(index: number, event: any): void{
    try{
      this.tableHandlerService.changeColumnName(this.tableHandlerService.getColumns()[index], event.target.value);
    } catch (e){
      this.showError(event.target.id);
    }
  }

  showError(target: string): void {
    const inputRef = document.getElementById(target);
    inputRef.classList.add('alert', 'alert-danger');

  }

}
