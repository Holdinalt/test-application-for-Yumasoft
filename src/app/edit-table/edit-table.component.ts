import {Component, OnInit} from '@angular/core';
import {Passport} from '../models/Passport';
import {PassportsHandlerService} from '../passports-handler.service';


@Component({
  selector: 'app-edit-table',
  templateUrl: 'edit-table.component.html',
  styleUrls: ['edit-table.component.css']
})

export class EditTableComponent implements OnInit{

  ngOnInit(): void {
  }

  constructor(public passportsHandlerService: PassportsHandlerService) {

  }

  updateInfo(row: number, col: string, event: any): void{
    this.passportsHandlerService.changeInfo(row, col, event.target.value);
  }

  addRow(): void{
    this.passportsHandlerService.addRow(new Passport(new Map<string, string>()));
  }



}
