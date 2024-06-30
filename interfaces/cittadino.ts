import { IStartup } from "./startup";

export interface ICittadino {
  nome:string;
  cognome:string;
  eta:number;
  sports:string[];
  partecipaAttivita(startup:IStartup);
}