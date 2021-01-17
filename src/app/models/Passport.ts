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
}
