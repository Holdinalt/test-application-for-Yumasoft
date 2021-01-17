import { Injectable } from '@angular/core';
import {Passport} from './models/Passport';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class PassportHandlerService {

  private messageSource = new BehaviorSubject<Passport[]>(null);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  sendMessage(passports: Passport[]): void {
    this.messageSource.next(passports);
  }

}
