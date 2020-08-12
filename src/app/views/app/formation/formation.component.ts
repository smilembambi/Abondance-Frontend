import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormationService} from "../../../core/services/formation.service";
import {FormationModel} from "../../../models/formation.model";
import {ActivatedRoute, Router} from "@angular/router";
import {DetailFormationModel} from "../../../models/detailFormation.model";
import {CategorieDetailModel} from "../../../models/categorieDetail.model";
import {CategorieModel} from "../../../models/categorie.model";

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {
  formations: FormationModel[] = [];
  id: number;
  loading: boolean;
  formation: FormationModel = new FormationModel();
  detailFormations: DetailFormationModel[] = [];


  publicVise: DetailFormationModel[] = [];
  objectPeda: DetailFormationModel[] = [];
  contenuTheme: DetailFormationModel[] = [];
  duree: DetailFormationModel[] = [];
  methodePeda: DetailFormationModel[] = [];
  modaliteEva: DetailFormationModel[] = [];
  validation: DetailFormationModel[] = [];

  categorie: CategorieModel = new CategorieModel();

  constructor(
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private formationService: FormationService) { }
  
  
  ngOnInit() {
    this.chargeData();
  }

  /**
   * Charger data
   */
  chargeData() {

    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      if (this.id && this.id > 0) {

        this.formationService.getOne(this.id).subscribe(
          (data: FormationModel)=>{
            if(data){
              this.formation = data;
              this.detailFormations = this.formation.detailFormations;

              this.detailFormations.forEach(
                (el: DetailFormationModel)=>{
                  if(el.categorie.id == 1){ this.publicVise.push(el); }
                  if(el.categorie.id == 2){ this.objectPeda.push(el); }
                  if(el.categorie.id == 3){ this.contenuTheme.push(el); }
                  if(el.categorie.id == 4){ this.duree.push(el); }
                  if(el.categorie.id == 5){ this.methodePeda.push(el); }
                  if(el.categorie.id == 6){ this.modaliteEva.push(el); }
                  if(el.categorie.id == 7){ this.validation.push(el); }
                }
              );

              this.loading = true;
              this.cdr.detectChanges();
            }
          }
        );
      } else {
      }
    });
  }


  /**
   * S'inscrire
   */
  inscription() {
    this.router.navigate(['/inscription/'+this.formation.id]);
  }
}
