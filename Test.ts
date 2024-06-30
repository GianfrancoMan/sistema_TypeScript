import { Cittadino } from "./implementations/cittadino";
import { Incentivo } from "./implementations/incentivo";
import { Startup } from "./implementations/startup";
import { ICittadino } from "./interfaces/cittadino";
import { IIncentivo } from "./interfaces/incentivo";
import { IStartup } from "./interfaces/startup";

//istanze IStartup
let startup1:IStartup = new Startup("Startup1", "focus startup1", "desccrizione startup1", ["prodotto1 startup1", "prodotto2 startup1"]);
let startup2:IStartup = new Startup("Startup2", "focus startup2", "desccrizione startup2", ["prodotto1 startup2", "prodotto2 startup2"]);
//istanze IIncentivo
let incentivo1:IIncentivo = new Incentivo(1, "Incentivo1", 500.00, ["criterio1 incentivo1", "criterio2 incentivo1"]);
let incentivo2:IIncentivo = new Incentivo(1, "Incentivo2", 600.00, ["criterio1 incentivo2", "criterio2 incentivo2"]);
//instanze ICittadino
let cittadino1: ICittadino = new Cittadino("nome_cittadino1", "cognome_cittadino1", 30, ["sport1 cittadino1", "sport2 cittadino1"]);
let cittadino2: ICittadino = new Cittadino("nome_cittadino2", "cognome_cittadino2", 30, ["sport1 cittadino2", "sport2 cittadino2"]);

//assegna incentivo1 a startup1
incentivo1.assegnaAStartup(startup1);
//assegna incentivo2 a startup1
incentivo1.assegnaAStartup(startup2);
//assegna incentivo2 a startup2
incentivo2.assegnaAStartup(startup2);
//cittadino1 partecipa alle attivita di starup2
cittadino1.partecipaAttivita(startup2);
//cittadino2 partecipa alle attivita di starup1
cittadino2.partecipaAttivita(startup1);