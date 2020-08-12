import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

import {environment} from "../../../environments/environment";
import {DetailFormationModel} from "../../models/detailFormation.model";





@Injectable({
  providedIn: 'root'
})
export class DetailFormationService {
  url = 'api/detailformation';

  constructor(private http: HttpClient) { }


  /**
   * Obtenir les details formations
   */
  getAll(): Observable<DetailFormationModel[]> {
    return this.http.get<DetailFormationModel[]>(environment.baseUrl+this.url);
  }



  /**
   * Creation  detail formations
   * @param _detailformation
   */
  create(_detailformation: DetailFormationModel): Observable<DetailFormationModel> {
    let detailformation =  JSON.stringify(_detailformation);
    return this.http.post<DetailFormationModel>(environment.baseUrl+this.url, detailformation);
  }


  /**
   * Modification detail formations
   * @param _detailformation
   */
  update(_detailformation: DetailFormationModel): Observable<DetailFormationModel> {
    return this.http.patch<DetailFormationModel>(environment.baseUrl+this.url +'/'+ _detailformation.id, _detailformation);
  }

  /**
   * Suppression detail formations
   * @param id
   */
  delete(id: number): Observable<string> {
    return this.http.delete<string>(environment.baseUrl+this.url+"/"+ id);
  }


  /**
   * Obtenir un detail formations
   * @param id
   */
  getOne(id: number): Observable<DetailFormationModel> {
    return this.http.get<DetailFormationModel>(environment.baseUrl+this.url+"/" + id);
  }






}
