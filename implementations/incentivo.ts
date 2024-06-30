import { IIncentivo } from "../interfaces/incentivo";
import { IStartup } from "../interfaces/startup";

export class Incentivo implements IIncentivo {
  id:number;
  descrizione:string;
  valore:number;
  criteri:string[];

  constructor(id:number, descrizione:string, valore:number,  criteri:string[]) {
    this.id = id;
    this.descrizione = descrizione;
    this.valore = valore;
    this.criteri =criteri;
  }

  assegnaAStartup(startup: IStartup):void {
    //does things
    console.log(`${this.descrizione} del valore di ${this.valore} asseganto a ${startup.nome}`);
    startup.riceviIncentivo(this);
  }
  
}