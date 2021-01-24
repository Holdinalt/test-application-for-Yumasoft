import {Passport} from './Passport';

export class PassportsWrap{

  // addPassportsFromCSV(csv: string, separator: string): void{ //TODO
  //   const rawRows = csv.split('\n');
  //   let passports: Passport[] = null;
  //   for (const rows of rawRows){
  //     // if (isNaN(Number(rows.split(separator)[1])) || isNaN(Number(rows.split(separator)[0]))){
  //     //   throw new Error('Parsing Exception');
  //     // }
  //     if (passports === null){
  //       passports = [new Passport(rows.split(separator)[0], rows.split(separator)[1])];
  //     }else {
  //       passports.push(new Passport(rows.split(separator)[0], rows.split(separator)[1]));
  //     }
  //     if (passports[0].name === 'Name'){
  //       passports.splice(0, 1);
  //     }
  //   }
  //   this.addPassports(passports);
  // }
  //
  // getPassportsCSV(separator: string): string{ //TODO
  //   let out = 'Name' + separator + 'Year';
  //   for (const passport of this.passports){
  //     out += '\n' + passport.name + separator + passport.year;
  //   }
  //   // console.log(out);
  //   return out;
  }


