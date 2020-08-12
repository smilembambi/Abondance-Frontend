import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { FormationService } from 'src/app/core/services/formation.service';
import { FormationModel } from 'src/app/models/formation.model';
import {CategorieModel} from "../../../models/categorie.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {
  id: number;
  formations: FormationModel[] = [];
  categorie: CategorieModel = new CategorieModel();
  loading: boolean = false;
  subscriptions: Subscription[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private cdr: ChangeDetectorRef,
              private router: Router,
              private formationService: FormationService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      if (this.id && this.id > 0) {

        this.formationService.getByCategorie(this.id).subscribe(
          (data: FormationModel[])=>{
            if(data){
              this.formations = data;
              let i = 0;
              data.forEach(
                (el: FormationModel)=>{
                    this.categorie = el.categorie;
                }
              );
              console.log(this.categorie)
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
   * Get formation
   * @param formation
   */
  getFormation(formation: FormationModel) {
    this.router.navigate(['/formation/'+formation.id]);
  }



  /**
   * On Destroy
   */
  ngOnDestroy() {
    // stoper tous les subscription à la fermeture
    this.subscriptions.forEach(el => el.unsubscribe());
  }

  /**
   * Obtenir le jour de la formation
   * @param date
   */
  getJour(date: string) {
    let d = new Date(date) ;
    if(d.getDate() < 10){
      return "0"+d.getDate();
    }
    return d.getDate();
  }

  /**
   * Obtenir le mois de la formation
   * @param date
   */
  getMois(date: string) {
    let d = new Date(date) ;
    let dd = d.getMonth();
    let m : number = 1 + Number(dd);
    if(m == 1){  return "Janvier"};
    if(m == 2){  return "Février"};
    if(m == 3){  return "Mars"};
    if(m == 4){  return "Avril"};
    if(m == 5){  return "Mai"};
    if(m == 6){  return "Juin"};
    if(m == 7){  return "Juillet"};
    if(m == 8){  return "Août"};
    if(m == 9){  return "Septembre"};
    if(m == 10){  return "Octobre"};
    if(m == 11){  return "Novembre"};
    if(m == 12){  return "Decembre"};

  }


  /**
   * Obtenir le de debut de la formation
   * @param heureDebut
   */
  getHeure(heureDebut: string) {
    let d = new Date(heureDebut);
    return d.getHours() + ":" + d.getMinutes();
  }


  /**
   * Obtenir le jour en francais
   * @param date
   */
  getJourFr(date: string) {
    let d = new Date(date);

    if(d.getDay() == 0){  return "Dimanche"; }
    if(d.getDay() == 1){  return "Lundi"; }
    if(d.getDay() == 2){  return "Mardi"; }
    if(d.getDay() == 3){  return "Mercredi"; }
    if(d.getDay() == 4){  return "Jeudi"; }
    if(d.getDay() == 5){  return "Vendredi"; }
    if(d.getDay() == 6){  return "Samedi"; }
  }


  /**
   * Visualiser la formation
   * @param formation
   */
  view(formation: FormationModel) {
    // this.router.navigate(['/formation/'+formation.id]);
    this.router.navigate(['/formation', formation.id], { relativeTo: this.activatedRoute });
    //this.router.navigateByUrl('/formation/'+formation.id);
  }
}
