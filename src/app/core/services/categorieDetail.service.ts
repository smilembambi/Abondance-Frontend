import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

import {environment} from "../../../environments/environment";
import {CategorieDetailModel} from "../../models/categorieDetail.model";





@Injectable({
  providedIn: 'root'
})
export class CategorieDetailService {
  url = 'api/categoriedetail';

  constructor(private http: HttpClient) { }


  /**
   * Obtenir les categories details
   */
  getAll(): Observable<CategorieDetailModel[]> {
    return this.http.get<CategorieDetailModel[]>(environment.baseUrl+this.url);
  }



  /**
   * Creation categorie detail
   * @param _categoriedetail
   */
  create(_categoriedetail: CategorieDetailModel): Observable<CategorieDetailModel> {
    let categoriedetail =  JSON.stringify(_categoriedetail);
    return this.http.post<CategorieDetailModel>(environment.baseUrl+this.url, categoriedetail);
  }

  /**
   * Modification categorie detail
   * @param _categoriedetail
   */
  update(_categoriedetail: CategorieDetailModel): Observable<CategorieDetailModel> {
    return this.http.patch<CategorieDetailModel>(environment.baseUrl+this.url +'/'+ _categoriedetail.id, _categoriedetail);
  }

  /**
   * Suppression categorie detail
   * @param id
   */
  delete(id: number): Observable<string> {
    return this.http.delete<string>(environment.baseUrl+this.url+"/"+ id);
  }


  /**
   * Obtenir un categorie detail
   * @param id
   */
  getOne(id: number): Observable<CategorieDetailModel> {
    return this.http.get<CategorieDetailModel>(environment.baseUrl+this.url+"/" + id);
  }


}
