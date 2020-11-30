import { EmeteurModel } from './emeteur.model';
import { RecepteurModel } from './recepteur.model';

export class EnvoieModel{
    
    public id!: number;
    public date!: string;
    public montant!: number;
    public emeteur!: EmeteurModel;
    public recepteur!: RecepteurModel;

}