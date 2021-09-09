import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/service/contact.service';
import { Contact } from 'src/app/shared/contact';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  txtValue:string = null;
  message : string;
  private contact = new Contact();


  //create form object
  form = new FormGroup({
    name : new FormControl('', Validators.required),
    address: new FormControl('',Validators.required),
    number: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });

  constructor(private contactService: ContactService) { 
   
  }

  ngOnInit(): void {
    
  }

  onTextChange(value)
  {
    this.txtValue = value;
    if(this.txtValue == '')
    {
      this.message="Cannot be empty";
    }
  }

  contactForm(contactInformation){
    this.contact.name = this.Name.value;
    this.contact.address = this.Address.value;
    this.contact.number = this.Number.value;
    this.contact.email = this.Email.value;
    this.contact.message = this.Message.value;

    this.contactService.sendContact(this.contact).subscribe(
      
      response => {
        let result =response.text();
        console.log(result);
     },
     error  =>{
      alert("Error: "+error);
     } 
    );
  }

  get Name(){
    return this.form.get('name');
  } 

  get Address(){
    return this.form.get('address');
  }

  get Number(){
    return this.form.get('number');
  }

  get Email(){
    return this.form.get('email');
  }

  get Message(){
    return this.form.get('message');
  }

}
