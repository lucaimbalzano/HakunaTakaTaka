import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../shared/contact';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUri ="http://localhost:8080/hakuna/takataka";
  constructor(private http: Http, private router: Router) { }

    sendContact(contact: Contact): Observable<any> {
      let url = this.baseUri + "/sendingEmail";
      console.log("service part");
      console.log(contact);
      console.log(url);
      return this.http.post(url, contact);
  }
}