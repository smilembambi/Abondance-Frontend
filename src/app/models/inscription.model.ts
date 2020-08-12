import {EtudiantModel} from "./etudiant.model";
import {FormationModel} from "./formation.model";

export class InscriptionModel {
  id:number;
  etudiant: EtudiantModel;
  formation: FormationModel;
  projetFormation: string;
}
