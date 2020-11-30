import { EmeteurModel } from './emeteur.model';
import { EnvoieModel } from './envoie.model';
import { RecepteurModel } from './recepteur.model';

export class InfoModel{
    
    public emeteur: EmeteurModel = new EmeteurModel;
    public recepteur: RecepteurModel = new RecepteurModel;
    public envoie: EnvoieModel = new EnvoieModel;


}