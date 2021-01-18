export class Passport{
  name: string;
  year: number;

  constructor(name: string, year: number) {
    this.name = name;
    this.year = year;
  }

  toStringArray(passports: Passport[]): string[][]{
    let out: string[][];
    for (let passport of passports){
      if (out == null){
        out = [[passport.name + ',' + passport.year]];
      } else{
        out.push([passport.name + ',' + passport.year]);
      }
    }
    return out;
  }

  parseToCSV(passports: Passport[], separator: string): string{
    let out = 'Name' + separator + 'Year' + '\n';
    for (let passport of passports){
        out += passport.name + separator + passport.year + '\n';
    }
    console.log(out);
    return out;
  }

  parseFromCSV(csv: string, separator: string): Passport[]{
    console.log(csv);
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
    return passports;
  }
}
