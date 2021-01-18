import {Passport} from './Passport';

export class PassportsWrap{

  private passports: Passport[];


  setPassports(passports: Passport[]): void{
    this.passports = passports;
  }

  getPassports(): Passport[]{
    if (this.passports == null){
      return [];
    }
    return this.passports;
  }

  addPassports(passports: Passport[]): void{
    if (this.passports == null){
      this.passports = [];
    }
    for (let passport of passports){
      this.passports.push(passport);
    }
  }

  addPassportsFromJSON(json: string): void{
    this.addPassports(JSON.parse(json));
  }

  addPassportsFromCSV(csv: string, separator: string): void{
    const rawRows = csv.split('\n');
    let passports: Passport[] = null;
    for (let rows of rawRows){
      if (passports === null){
        passports = [new Passport(rows.split(separator)[0], Number(rows.split(separator)[1]))];
      }else {
        passports.push(new Passport(rows.split(separator)[0], Number(rows.split(separator)[1])));
      }
      if (passports[0].name === 'Name'){
        passports.splice(0, 1);
      }
    }
    this.addPassports(passports);
  }

  getPassportsCSV(separator: string): string{
    let out = 'Name' + separator + 'Year' + '\n';
    for (let passport of this.passports){
      out += passport.name + separator + passport.year + '\n';
    }
    console.log(out);
    return out;
  }

  getPassportsJSON(): string{
    return JSON.stringify(this.passports);
  }

}