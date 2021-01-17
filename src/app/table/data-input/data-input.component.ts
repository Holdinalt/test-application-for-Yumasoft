import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Passport} from '../../models/Passport';
import {PassportHandlerService} from '../../passport-handler.service';
import {emit} from 'cluster';


@Component({
  selector: 'app-table-data-input',
  templateUrl: 'data-input.component.html',
  styleUrls: ['data-input.component.css']
})

export class DataInputComponent implements OnInit{

  @Output() passportChange = new EventEmitter<Passport[]>();

  passports: Passport[] = [];

  inputLine: string;

  constructor(private passportHandlerService: PassportHandlerService) {
  }

  ngOnInit(): void {
    this.passportHandlerService.currentMessage.subscribe(passports =>  this.passports = passports);
  }

  sendPassports(): void{
    this.passportHandlerService.sendMessage(this.passports);
  }


  addInfo(): void{
    console.log(this.inputLine);

    try{
      this.addToPassports(JSON.parse(this.inputLine));
      this.hideError();
    } catch (e){
      this.showError();
    }
  }


  showError(): void {
    const inputRef = document.getElementById('inputData');
    inputRef.classList.add('alert', 'alert-danger');

  }

  hideError(): void {
    const inputRef = document.getElementById('inputData');
    inputRef.classList.remove('alert', 'alert-danger');
  }

  addToPassports(passports: Passport[]): void{
    for (let passport of passports){
      this.passports.push(passport);
    }
    this.sendPassports();
    this.passportChange.emit(this.passports);
  }

}
