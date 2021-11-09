import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../shared/contact';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUri ="https://xzu9ntkw05.execute-api.us-east-2.amazonaws.com/HAKUNA_STAGE";
  constructor(private http: Http, private router: Router) { }

    sendContact(contact: Contact): Observable<any> {
      let url = this.baseUri;
      return this.http.put(url, contact);
  }
}