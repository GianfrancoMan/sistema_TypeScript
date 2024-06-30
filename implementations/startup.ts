import { IIncentivo } from "../interfaces/incentivo";
import { IStartup } from "../interfaces/startup";

export class Startup implements IStartup {
  nome:string;
  focus:string;
  descrizione:string;
  prodotti:string[];

  constructor(nome:string, focus:string, descrizione:string, prodotti:string[] ) {
    this.nome = nome;
    this.focus = focus;
    this.descrizione = descrizione;
    this.prodotti = prodotti;
  }
   
  public riceviIncentivo(incentivo:IIncentivo):void {
    //does things;
    console.log(`${this.nome} dice: Ricevuto incentivo ${incentivo.descrizione} del valore di ${incentivo.valore}`);
  }

}

