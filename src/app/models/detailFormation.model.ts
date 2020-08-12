import {FormationModel} from "./formation.model";
import {CategorieDetailModel} from "./categorieDetail.model";

export class DetailFormationModel {
  id: number;
  formation: FormationModel;
  categorie : CategorieDetailModel;
  titre: string;

}
