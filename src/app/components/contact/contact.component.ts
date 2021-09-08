import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/shared/contact';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 
  private contact = new Contact();

  //create form object
  form = new FormGroup({
    name : new FormControl('', Validators.required),
    address: new FormControl('',Validators.required),
    number: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
    
  }

  

}
