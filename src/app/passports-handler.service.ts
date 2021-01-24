import {Injectable} from '@angular/core';
import {Passport} from './models/Passport';

@Injectable()
export class PassportsHandlerService {

  private passports: Passport[] = [];

  columns: string[];

  getColumns(): string[] {
    return this.columns;
  }

  getPassports(): Passport[] {
    return this.passports;
  }


  addPassportsFromJSON(json: string): void {
    const objects = JSON.parse(json);
    for (const obj of objects) {
      const newMap = new Map();
      for (const prop in obj) {
        const temp = prop.charAt(0).toUpperCase() + prop.substr(1).toLowerCase();
        newMap.set(temp, obj[prop]);
      }
      this.addInfo(newMap);
    }
    this.makeColumns();
  }

  addPassportsFromCSV(csv: string, separator: string): void {
    const rawRows = csv.split('\n');
    let cols: string[] = [];

    for (const col of rawRows[0].split(separator)) { // Set up columns
      if (cols.length === 0) {
        cols = [col.charAt(0).toUpperCase() + col.substr(1).toLowerCase()];
      } else {
        cols.push(col.charAt(0).toUpperCase() + col.substr(1).toLowerCase());
      }
    }

    rawRows.splice(0, 1); // getting true info

    for (const row of rawRows) {
      const newMap = new Map();
      const data = row.split(separator);
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        if (data[i] !== '') {
          newMap.set(cols[i], data[i]);
        }
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

  getPassportsCSV(separator: string): string {
    if (this.passports.length === 0){
      return '';
    }
    let out = '';
    for (const col of this.columns){
      if (out === ''){
        out = col;
      }else {
        out += separator + col;
      }

    }
    for (const passport of this.passports){
        out += '\n' + passport.getCSV(separator, this.columns);
    }
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
    let cols: string[] = [];
    for (const passport of this.passports){

      for (let key of passport.getKeys()){ // создаем столбцы

        key = key.charAt(0).toUpperCase() + key.substr(1).toLowerCase();

        if ((cols.indexOf(key) === -1)){
          if (cols === []){
            cols = [key];
          }
          cols.push(key);
        }
      }
    }

    // let newCols: string[] = []; // In case the order of the column changes
    // for (const newCol of cols){
    //   if (cols.indexOf(oldCol) !== -1){
    //     if (newCols.length === 0){
    //       newCols = [oldCol]
    //     }
    //   }
    // }
    this.columns = cols;
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
