import { Injectable } from '@angular/core';
import {Passport} from './models/Passport';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class PassportHandlerService {

  private messageSource = new BehaviorSubject<Passport[]>(JSON.parse(sessionStorage.getItem('passports')));
  currentMessage = this.messageSource.asObservable();


  sendMessage(passports: Passport[]): void {
    let new_passports = null;
    this.messageSource.next(passports);
    this.currentMessage.subscribe(old_passports =>  new_passports = old_passports);
    sessionStorage.setItem('passports',  JSON.stringify(new_passports));
  }

}
