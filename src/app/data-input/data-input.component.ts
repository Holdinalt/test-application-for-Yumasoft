import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Passport} from '../models/Passport';
import {PassportHandlerService} from '../passport-handler.service';

@Component({
  selector: 'app-table-data-input',
  templateUrl: 'data-input.component.html',
  styleUrls: ['data-input.component.css']
})

export class DataInputComponent implements OnInit{

  @Output() passportChange = new EventEmitter<Passport[]>();

  passports: Passport[];

  inputJSONLine: string;
  inputCSVLine: string;

  JSONUploadFile: File = null;

  constructor(private passportHandlerService: PassportHandlerService) {
  }

  ngOnInit(): void {
    this.passportHandlerService.currentMessage.subscribe(passports =>  this.passports = passports);
    this.passportChange.emit(this.passports);
  }

  sendPassports(): void{
    this.passportHandlerService.sendMessage(this.passports);
  }


  addJSONInfo(): void{
    const temp: Passport[] = JSON.parse(this.inputJSONLine);
    this.addInfo(temp);
  }

  addCSVInfo(): void{
    const parse = new Passport('1', 1);
    const temp: Passport[] = parse.parseFromCSV(this.inputCSVLine, ',');
    this.addInfo(temp);
  }

  addInfo(temp: Passport[]): void{
    if (this.passports == null){
      this.setPassports(temp);
    } else{
      this.addToPassports(temp);
    }
    this.hideError();
    try{

    } catch (e){
      this.showError();
    }
  }


  showError(): void {
    const inputRef = document.getElementById('inputJSONData');
    inputRef.classList.add('alert', 'alert-danger');

  }

  hideError(): void {
    const inputRef = document.getElementById('inputJSONData');
    inputRef.classList.remove('alert', 'alert-danger');
  }

  addToPassports(passports: Passport[]): void{
    for (let passport of passports){
      console.log(passport.name);
      this.passports.push(passport);
    }
    this.sendPassports();
    this.passportChange.emit(this.passports);
  }

  setPassports(passports: Passport[]): void{
    this.passports = passports;
    this.sendPassports();
    this.passportChange.emit(this.passports);
  }

  inputJSONFile(files: FileList): void {
    this.JSONUploadFile = files.item(0);
    const reader = new FileReader();
    reader.onload = () => {
      console.log(reader.result);
      const temp: Passport[] = JSON.parse(reader.result.toString());
      this.addInfo(temp);
    };
    reader.readAsText(this.JSONUploadFile);
  }

}
