import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

import {environment} from "../../../environments/environment";
import {ContactModel} from "../../models/contact.model";






@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url = 'contact';

  constructor(private http: HttpClient) { }


  /**
   * Obtenir les contacts
   */
  getAll(): Observable<ContactModel[]> {
    return this.http.get<ContactModel[]>(environment.baseUrl+this.url);
  }



  /**
   * Creation contact
   * @param _contact
   */
  create(_contact: ContactModel): Observable<ContactModel> {
    let contact =  JSON.stringify(_contact);
    return this.http.post<ContactModel>(environment.baseUrl+this.url, contact);
  }

  /**
   * Modification contact
   * @param _contact
   */
  update(_contact: ContactModel): Observable<ContactModel> {
    return this.http.patch<ContactModel>(environment.baseUrl+this.url +'/'+ _contact.id, _contact);
  }

  /**
   * Suppression contact
   * @param id
   */
  delete(id: number): Observable<string> {
    return this.http.delete<string>(environment.baseUrl+this.url+"/"+ id);
  }


  /**
   * Obtenir un contact
   * @param id
   */
  getOne(id: number): Observable<ContactModel> {
    return this.http.get<ContactModel>(environment.baseUrl+this.url+"/" + id);
  }



}
