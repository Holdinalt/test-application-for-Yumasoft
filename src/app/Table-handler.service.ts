import {Injectable} from '@angular/core';
import {Row} from './models/Row';

@Injectable()
export class TableHandlerService {

  private rows: Row[] = [];

  columns: string[];

  getColumns(): string[] {
    return this.columns;
  }

  getRows(): Row[] {
    return this.rows;
  }


  addRowsFromJSON(json: string): void {
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

  addRowsFromCSV(csv: string, separator: string): void {
    const rawRows = csv.split('\n');
    let cols: string[] = [];

    if (rawRows.length < 1){
      throw new Error('Недостаточно информации');
    }

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

          if (cols[i] !== undefined){

            newMap.set(cols[i], data[i]);

          } else {

            let tempNum = 0;
            while (newMap.has('Col ' + tempNum)){
              tempNum++;
            }

            newMap.set('Col ' + tempNum, data[i]);

          }

        }
      }
      this.addInfo(newMap);
    }
    this.makeColumns();
  }

  getRowsJSON(): string{
    if (this.rows.length === 0){
      return '[]';
    }
    let out = '';
    for (const row of this.rows){
      if (out === ''){
        out = '[' + row.getJSON();
      }else {
        out += ',' + row.getJSON();
      }
    }
    out += ']';
    return out;
  }

  getRowsCSV(separator: string): string {
    if (this.rows.length === 0){
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
    for (const row of this.rows){
        out += '\n' + row.getCSV(separator, this.columns);
    }
    return out;
  }




  deletePassport(index: number): void {
    this.rows.splice(index, 1);
    this.makeColumns();
  }

  changeInfo(row: number, col: string, val: string): void{
    this.rows[row].set(col, val);
    this.makeColumns();
  }

  addInfo(map: Map<string, string>): void{
    if (this.rows === []){
      this.rows = [new Row(map)];
    }else{

      this.rows.push(new Row(map));
    }
  }

  addRow(row: Row): void{
    if (this.rows === []){
      this.rows = [row];
    }else {
      this.rows.push(row);
      this.makeColumns();
    }
  }

  deleteColumn(col: string): void{
    const index = this.columns.indexOf(col);
    if (index !== -1){
      this.columns.splice(index, 1);
    }
    for (const row of this.rows){
      row.delete(col);
    }
  }

  makeColumns(): void{
    let cols: string[] = [];
    for (const row of this.rows){

      for (let key of row.getColumns()){ // создаем столбцы

        if (key !== undefined){
          key = key.charAt(0).toUpperCase() + key.substr(1).toLowerCase();
        }



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
    const newRows = this.rows; // current row
    const tempPassport: Row = this.rows[index]; // new array
    newRows.splice(index, 1);
    newRows.splice(index - 1, 0, tempPassport);
    this.rows = newRows;
  }


  downRow(index: number): void{
    if (index === this.rows.length){
      return;
    }

    const newRow = this.rows;
    const tempPassport: Row = this.rows[index];
    newRow.splice(index, 1);
    newRow.splice(index + 1, 0, tempPassport);
    this.rows = newRow;
  }

  changeColumnName(oldName: string, newName: string): void{

    if (this.columns.includes(newName)){
      throw new Error('Такой столбец уже существует');
    }

    for (const row of this.rows){
      row.changeColumnName(oldName, newName);
    }
    this.makeColumns();
  }

}
