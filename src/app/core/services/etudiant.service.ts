import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

import {environment} from "../../../environments/environment";
import {EtudiantModel} from "../../models/etudiant.model";





@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  url = 'api/etudiant';

  constructor(private http: HttpClient) { }


  /**
   * Obtenir les etudiants
   */
  getAll(): Observable<EtudiantModel[]> {
    return this.http.get<EtudiantModel[]>(environment.baseUrl+this.url);
  }



  /**
   * Creation etudiant
   * @param _etudiant
   */
  create(_etudiant: EtudiantModel): Observable<EtudiantModel> {
    let etudiant =  JSON.stringify(_etudiant);
    return this.http.post<EtudiantModel>(environment.baseUrl+this.url, etudiant);
  }

  /**
   * Modification etudiant
   * @param _etudiant
   */
  update(_etudiant: EtudiantModel): Observable<EtudiantModel> {
    return this.http.patch<EtudiantModel>(environment.baseUrl+this.url +'/'+ _etudiant.id, _etudiant);
  }

  /**
   * Suppression etudiant
   * @param id
   */
  delete(id: number): Observable<string> {
    return this.http.delete<string>(environment.baseUrl+this.url+"/"+ id);
  }


  /**
   * Obtenir un etudiant
   * @param id
   */
  getOne(id: number): Observable<EtudiantModel> {
    return this.http.get<EtudiantModel>(environment.baseUrl+this.url+"/" + id);
  }



}
