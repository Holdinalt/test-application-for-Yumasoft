import {Injectable} from '@angular/core';
import {Passport} from './models/Passport';

@Injectable()
export class PassportsHandlerService{

  private passports: Passport[] = [];

  columns: string[];

  getColumns(): string[]{
    return this.columns;
  }

  getPassports(): Passport[]{
    return this.passports;
  }


  addPassportsFromJSON(json: string): void{
    const objects = JSON.parse(json);
    for (const obj of objects){
      const newMap = new Map();
      for (const prop in obj){
        const temp = prop.charAt(0).toUpperCase() + prop.substr(1).toLowerCase();
        newMap.set(temp, obj[prop]);
      }
      this.addInfo(newMap);
    }
    this.makeColumns();
  }

  getPassportsJSON(): string{
    if (this.passports.length === 0){
      return '[]';
    }
    let out = '';
    for (const passport of this.passports){
      if (out === ''){
        out = '[' + passport.getJSON();
      }else {
        out += ',' + passport.getJSON();
      }
    }
    out += ']';
    return out;
  }

  deletePassport(index: number): void {
    this.passports.splice(index, 1);
    this.makeColumns();
  }

  changeInfo(row: number, col: string, val: string): void{
    this.passports[row].set(col, val);
    this.makeColumns();
  }

  addInfo(map: Map<string, string>): void{
    if (this.passports === []){
      this.passports = [new Passport(map)];
    }else{

      this.passports.push(new Passport(map));
    }
  }

  addRow(passport: Passport): void{
    if (this.passports === []){
      this.passports = [passport];
    }else {
      this.passports.push(passport);
      this.makeColumns();
    }
  }

  deleteColumn(col: string): void{
    const index = this.columns.indexOf(col);
    if (index !== -1){
      this.columns.splice(index, 1);
    }
    for (const passport of this.passports){
      passport.delete(col);
    }
  }

  makeColumns(): void{
    let col: string[] = [];
    for (const passport of this.passports){

      for (let key of passport.getKeys()){ // создаем столбцы

        key = key.charAt(0).toUpperCase() + key.substr(1).toLowerCase();

        if ((col.indexOf(key) === -1)){
          if (col === []){
            col = [key];
          }
          col.push(key);
        }
      }
    }

    this.columns = col;
  }

  upRow(index: number): void{
    if (index === 0){
      return;
    }
    const newPassports = this.passports; // current row
    const tempPassport: Passport = this.passports[index]; // new array
    newPassports.splice(index, 1);
    newPassports.splice(index - 1, 0, tempPassport);
    this.passports = newPassports;
  }


  downRow(index: number): void{
    if (index === this.passports.length){
      return;
    }

    const newPassports = this.passports;
    const tempPassport: Passport = this.passports[index];
    newPassports.splice(index, 1);
    newPassports.splice(index + 1, 0, tempPassport);
    this.passports = newPassports;
  }





  // getPassports(): Passport[]{
  //   if ( sessionStorage.getItem('passports') === ''){
  //     return [];
  //   }
  //   // console.log(JSON.parse(sessionStorage.getItem('passports')));
  //   return JSON.parse(sessionStorage.getItem('passports'));
  // }
  //
  // setPassports(passports: Passport[]): void{
  //   sessionStorage.setItem('passports',  JSON.stringify(passports));
  // }

}
