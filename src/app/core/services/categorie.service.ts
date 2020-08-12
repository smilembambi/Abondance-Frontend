import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

import {environment} from "../../../environments/environment";

import {CategorieModel} from "../../models/categorie.model";



@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  url = 'categorie';

  constructor(private http: HttpClient) { }


  /**
   * Obtenir les categories
   */
  getAll(): Observable<CategorieModel[]> {
    return this.http.get<CategorieModel[]>(environment.baseUrl+this.url);
  }



  /**
   * Creation categorie
   * @param _categorie
   */
  create(_categorie: CategorieModel): Observable<CategorieModel> {
    let categorie =  JSON.stringify(_categorie);
    return this.http.post<CategorieModel>(environment.baseUrl+this.url, categorie);
  }

  /**
   * Modification categorie
   * @param _categorie
   */
  update(_categorie: CategorieModel): Observable<CategorieModel> {
    return this.http.patch<CategorieModel>(environment.baseUrl+this.url +'/'+ _categorie.id, _categorie);
  }

  
  /**
   * Suppression categorie
   * @param id
   */
  delete(id: number): Observable<string> {
    return this.http.delete<string>(environment.baseUrl+this.url+"/"+ id);
  }


  /**
   * Obtenir un categorie
   * @param id
   */
  getOne(id: number): Observable<CategorieModel> {
    return this.http.get<CategorieModel>(environment.baseUrl+this.url+"/" + id);
  }






}
