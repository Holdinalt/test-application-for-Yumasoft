import {Component} from '@angular/core';
import {TableHandlerService} from '../Table-handler.service';

@Component({
  selector: 'app-table-data-input',
  templateUrl: 'data-input.component.html',
  styleUrls: ['data-input.component.css']
})

export class DataInputComponent{

  inputJSONLine: string;
  inputCSVLine: string;

  separatorCSV = ',';
  exampleOfCSV = 'Example:\nName,Year\ndan,2000';

  JSONUploadFile: File = null;
  CSVUploadFile: File = null;

  constructor(public passportsHandlerService: TableHandlerService) {

  }

  setSeparator(separator: string): void{
    this.separatorCSV = separator;
    this.exampleOfCSV = 'Example:\nName' + separator + 'Year\ndan' + separator + '2000';
  }

  addJSONInfo(): void{
    this.passportsHandlerService.addPassportsFromJSON(this.inputJSONLine);
    try{

      this.hideError('inputJSONData');
    } catch (e){
      this.showError('inputJSONData');
    }
  }

  addCSVInfo(): void{
    this.passportsHandlerService.addPassportsFromCSV(this.inputCSVLine, this.separatorCSV);
    try{

      this.hideError('inputCSVData');
    } catch (e){
      this.showError('inputCSVData');
    }
  }

  showError(target: string): void {
    const inputRef = document.getElementById(target);
    inputRef.classList.add('alert', 'alert-danger');

  }

  hideError(target: string): void {
    const inputRef = document.getElementById(target);
    inputRef.classList.remove('alert', 'alert-danger');
  }


  inputJSONFile(files: FileList): void {
     this.JSONUploadFile = files.item(0);
     const reader = new FileReader();

     reader.onload = () => {
       console.log(reader.result);
       this.passportsHandlerService.addPassportsFromJSON(reader.result.toString());
     };

     reader.readAsText(this.JSONUploadFile);
  }

  inputCSVFile(files: FileList): void {
    this.CSVUploadFile = files.item(0);
    const reader = new FileReader();

    reader.onload = () => {
      console.log(reader.result);
      this.passportsHandlerService.addPassportsFromCSV(reader.result.toString(), this.separatorCSV);
    };

    reader.readAsText(this.CSVUploadFile);
  }

}
