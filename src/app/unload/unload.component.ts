import {Component, OnInit} from '@angular/core';
import {PassportHandlerService} from "../passport-handler.service";
import {Passport} from "../models/Passport";



@Component({
  selector: 'app-unload',
  templateUrl: 'unload.component.html'
})

export class UnloadComponent implements OnInit{

  passports: Passport[];

  passportsJSON: string;

  constructor(private passportHandlerService: PassportHandlerService) {
  }

  ngOnInit(): void {
    this.passportHandlerService.currentMessage.subscribe(passports =>  this.passports = passports);
    if (this.passports == null){
      this.passportsJSON = '[]';
    } else {
      this.passportsJSON = JSON.stringify(this.passports);
    }
  }

}
