import {Component, OnInit} from '@angular/core';
import {PassportHandlerService} from '../passport-handler.service';
import {PassportsWrap} from '../models/PassportsWrap';

@Component({
  selector: 'app-table-data-input',
  templateUrl: 'data-input.component.html',
  styleUrls: ['data-input.component.css']
})

export class DataInputComponent implements OnInit{

  passportsWrap: PassportsWrap = new PassportsWrap();

  inputJSONLine: string;
  inputCSVLine: string;

  JSONUploadFile: File = null;
  CSVUploadFile: File = null;

  constructor(private passportHandlerService: PassportHandlerService) {
  }

  ngOnInit(): void {
    this.passportsWrap.setPassports(this.passportHandlerService.getPassports());
  }

  sendPassports(): void{
    this.passportHandlerService.setPassports(this.passportsWrap.getPassports());
  }


  addJSONInfo(): void{

    try{
      this.passportsWrap.addPassportsFromJSON(this.inputJSONLine);
      this.hideError();
    } catch (e){
      this.showError();
    }
    this.sendPassports();
  }

  addCSVInfo(separator: string): void{

    try{
      this.passportsWrap.addPassportsFromCSV(this.inputCSVLine, separator);
      this.hideError();
    } catch (e){
      this.showError();
    }
    this.sendPassports();
  }

  showError(): void {
    const inputRef = document.getElementById('inputJSONData');
    inputRef.classList.add('alert', 'alert-danger');

  }

  hideError(): void {
    const inputRef = document.getElementById('inputJSONData');
    inputRef.classList.remove('alert', 'alert-danger');
  }


  inputJSONFile(files: FileList): void {
    this.JSONUploadFile = files.item(0);
    const reader = new FileReader();

    reader.onload = () => {
      console.log(reader.result);
      this.passportsWrap.addPassportsFromJSON(reader.result.toString());
      this.sendPassports();
    };

    reader.readAsText(this.JSONUploadFile);
  }

  inputCSVFile(files: FileList): void {
    this.CSVUploadFile = files.item(0);
    const reader = new FileReader();

    reader.onload = () => {
      console.log(reader.result);
      this.passportsWrap.addPassportsFromCSV(reader.result.toString(), ',');
      this.sendPassports();
    };

    reader.readAsText(this.CSVUploadFile);
  }

}
