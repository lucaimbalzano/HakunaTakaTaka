import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../shared/contact';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUri ="http://hakunatakatakabackend-env.eba-yhjnehnm.us-east-2.elasticbeanstalk.com/hakuna/takataka";
  constructor(private http: Http, private router: Router) { }

    sendContact(contact: Contact): Observable<any> {
      let url = this.baseUri + "/sendingEmail";
      return this.http.put(url, contact);
  }
}