import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

import {environment} from "../../../environments/environment";
import {FormationModel} from "../../models/formation.model";
import {DetailFormationModel} from "../../models/detailFormation.model";



@Injectable({
  providedIn: 'root'
})
export class FormationService {
  url = 'formation';

  constructor(private http: HttpClient) { }


  /**
   * Obtenir les formations
   */
  getAll(): Observable<FormationModel[]> {
    return this.http.get<FormationModel[]>(environment.baseUrl+this.url);
  }

  /**
   * chercher une formation
   */
  find(data): Observable<FormationModel[]> {
    return this.http.post<FormationModel[]>(environment.baseUrl+this.url + "/find",data);
  }


  /**
   * Obtenir les formations par categories
   */
  getByCategorie(id: number): Observable<FormationModel[]> {
    return this.http.get<FormationModel[]>(environment.baseUrl+this.url + "/categorie/"+id);
  }


  /**
   * Obtenir les formations par auteur
   */
  getByAuteur(id: number): Observable<FormationModel[]> {
    return this.http.get<FormationModel[]>(environment.baseUrl+this.url + "/auteur/"+id);
  }



  /**
   * Creation formation
   * @param _formation
   */
  create(_formation: FormationModel): Observable<FormationModel> {
    let formation =  JSON.stringify(_formation);
    return this.http.post<FormationModel>(environment.baseUrl+this.url, formation);
  }

  /**
   * Modification formation
   * @param _formation
   */
  update(_formation: FormationModel): Observable<FormationModel> {
    return this.http.patch<FormationModel>(environment.baseUrl+this.url +'/'+ _formation.id, _formation);
  }

  /**
   * Suppression formation
   * @param id
   */
  delete(id: number): Observable<string> {
    return this.http.delete<string>(environment.baseUrl+this.url+"/"+ id);
  }


  /**
   * Obtenir un formation
   * @param id
   */
  getOne(id: number): Observable<FormationModel> {
    return this.http.get<FormationModel>(environment.baseUrl+this.url+"/" + id);
  }






}
