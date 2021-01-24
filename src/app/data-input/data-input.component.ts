import {Component, OnInit} from '@angular/core';
import {PassportsHandlerService} from '../passports-handler.service';

@Component({
  selector: 'app-table-data-input',
  templateUrl: 'data-input.component.html',
  styleUrls: ['data-input.component.css']
})

export class DataInputComponent implements OnInit{

  inputJSONLine: string;
  inputCSVLine: string;

  JSONUploadFile: File = null;
  CSVUploadFile: File = null;

  constructor(public passportsHandlerService: PassportsHandlerService) {

  }


  ngOnInit(): void {
    /*this.passportHandlerService
    this.table = this.wrap.getTable();
    this.createRowTable(this.table);*/
  }


  addJSONInfo(): void{
    this.passportsHandlerService.addPassportsFromJSON(this.inputJSONLine);
    try{

      this.hideError('inputJSONData');
    } catch (e){
      this.showError('inputJSONData');
    }
  }

  addCSVInfo(separator: string): void{ //TODO
  //
  //   try{
  //     this.passportsWrap.addPassportsFromCSV(this.inputCSVLine, separator);
  //     this.hideError('inputCSVData');
  //   } catch (e){
  //     this.showError('inputCSVData');
  //   }
  //   this.sendPassports();
  }

  showError(target: string): void {
    const inputRef = document.getElementById(target);
    inputRef.classList.add('alert', 'alert-danger');

  }

  hideError(target: string): void {
    const inputRef = document.getElementById(target);
    inputRef.classList.remove('alert', 'alert-danger');
  }


  inputJSONFile(files: FileList): void { //TODO
  //   this.JSONUploadFile = files.item(0);
  //   const reader = new FileReader();
  //
  //   reader.onload = () => {
  //     console.log(reader.result);
  //     this.passportsWrap.addPassportsFromJSON(reader.result.toString());
  //     this.sendPassports();
  //   };
  //
  //   reader.readAsText(this.JSONUploadFile);
  }

  inputCSVFile(files: FileList): void { //TODO
  //   this.CSVUploadFile = files.item(0);
  //   const reader = new FileReader();
  //
  //   reader.onload = () => {
  //     console.log(reader.result);
  //     this.passportsWrap.addPassportsFromCSV(reader.result.toString(), ',');
  //     this.sendPassports();
  //   };
  //
  //   reader.readAsText(this.CSVUploadFile);
  }

}
