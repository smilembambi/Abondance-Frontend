import {User} from "./user";
import {CategorieModel} from "./categorie.model";
import {DetailFormationModel} from "./detailFormation.model";

export class FormationModel {
  id: number;
  nom: string;
  categorie: CategorieModel;
  description: string;
  prix: string;
  date: string;
  heureDebut: string;
  lieu: string;
  duree: string;
  auteur: User;
  image: string;
  detailFormations: DetailFormationModel[];

}
