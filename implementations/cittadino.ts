import { ICittadino } from "../interfaces/cittadino";
import { IStartup } from "../interfaces/startup";

export class Cittadino implements ICittadino {
  nome:string;
  cognome:string;
  eta:number;
  sports:string[];

  constructor(nome:string, cognome:string, eta:number, sports:string[]) {
    this.nome = nome;
    this.cognome= cognome;
    this.eta= eta;
    this.sports = sports;
  }
  
  partecipaAttivita(startup:IStartup) {
    //does things;
    console.log(`${this.nome} ${this.cognome} partecipa alle attività:`);
    for(let attivita of startup.prodotti) {
      this.sports.push(attivita);
      console.log(attivita);
    }
    console.log(`Della startup ${startup.nome}`);
  }
}