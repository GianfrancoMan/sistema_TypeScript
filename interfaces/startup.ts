import { IIncentivo } from "./incentivo";

export interface IStartup {
  nome:string;
  focus:string;
  descrizione:string;
  prodotti:string[];
  riceviIncentivo(incentivo:IIncentivo):void;
}
