import { Component, OnInit } from '@angular/core';
import {FormationModel} from "../../../models/formation.model";
import {Subscription} from "rxjs";
import {FormationService} from "../../../core/services/formation.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-plusdate',
  templateUrl: './plusdate.component.html',
  styleUrls: ['./plusdate.component.scss']
})
export class PlusdateComponent implements OnInit {

  formations: FormationModel[] = [];
  subscriptions: Subscription[] = [];

  constructor(private formationService: FormationService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //Charger les formations
    this.chargeData();
  }


  /**
   * Charger data
   */
  chargeData() {

    let param : any = {};
    param.limit = "100";
    param.order = "DESC";
    this.formationService.find(param).subscribe(
      (data: FormationModel[])=>{
        if(data){
          this.formations = data;
          console.log(data);
        }
      }
    )
  }


  /**
   * Visualiser une formation
   * @param formation
   */
  view(formation: FormationModel) {
    // this.router.navigate(['/formation/'+formation.id]);
    this.router.navigate(['/formation', formation.id], { relativeTo: this.activatedRoute });
    //this.router.navigateByUrl('/formation/'+formation.id);
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
   * On Destroy
   */
  ngOnDestroy() {
    // stoper tous les subscription à la fermeture
    this.subscriptions.forEach(el => el.unsubscribe());
  }




}
