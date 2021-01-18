import { Injectable } from '@angular/core';
import {Passport} from './models/Passport';

@Injectable()
export class PassportHandlerService {

  getPassports(): Passport[]{
    if ( sessionStorage.getItem('passports') === ''){
      return [];
    }
    // console.log(JSON.parse(sessionStorage.getItem('passports')));
    return JSON.parse(sessionStorage.getItem('passports'));
  }

  setPassports(passports: Passport[]): void{
    sessionStorage.setItem('passports',  JSON.stringify(passports));
  }

}
