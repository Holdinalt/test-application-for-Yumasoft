export class Passport{

  map = new Map<string, string>();

  constructor(map: Map<string, string>) {
    this.map = map;
  }

  getKeys(): string[]{ // Достать и переложить ключи в массив
    let out: string[] = [];
    for (const key of this.map.keys()){
      if (out === []){
        out = [key];
      }else{
        out.push(key);
      }
    }
    return out;
  }

  get(key: string): string{
    if (this.map.has(key)){
      return this.map.get(key);
    } else{
      return '';
    }

  }

  delete(key: string): void{
    this.map.delete(key);
  }

  set(key: string, val: string): void{
    if (val === ''){
      this.map.delete(key);
    } else {
      this.map.set(key, val);
    }
  }

  getJSON(): string{
    let out = '';
    for (const key of this.map.keys()){
      if (out === ''){
        out = '{"' + key.toLowerCase() + '":"' + this.map.get(key) + '"';
      }else {
        out += ',"' + key + '":"' + this.map.get(key) + '"';
      }
    }
    out += '}';
    return out;
  }

  getCSV(separator: string, columns: string[]): string{
    let out = '';
    for (const col of columns){
      if (out === ''){
        out = this.get(col);
      }else {
        out += separator + this.get(col);
      }
    }
    return out;
  }
}
