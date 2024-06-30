import { IStartup } from "./startup";

export interface IIncentivo {
  id:number;
  descrizione:string;
  valore:number;
  criteri:string[];
  assegnaAStartup(startup:IStartup):void;
}