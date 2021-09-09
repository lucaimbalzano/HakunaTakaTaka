import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/service/contact.service';
import { Contact } from 'src/app/shared/contact';
import { forbiddenNameValidator } from 'src/app/shared/validator/contact.validators';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  txtValue:string = null;
  message : string;
  private contact = new Contact();
  form : FormGroup;
  notification:string="";

  //create form object
  // form = new FormGroup({
  //   name : new FormControl('', [Validators.required,forbiddenNameValidator]),
  //   address: new FormControl('',Validators.required),
  //   number: new FormControl('', Validators.required),
  //   email: new FormControl('', [Validators.required,Validators.email]),
  //   message: new FormControl('', Validators.required)
  // });

  constructor(private contactService: ContactService) { 
   
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name : new FormControl('', [Validators.required,forbiddenNameValidator]),
      address: new FormControl('',Validators.required),
      number: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required,Validators.email]),
      message: new FormControl('', Validators.required)
    });
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
        this.notification = result;
     },
     error  =>{       
      let result =error.text();
      this.notification = result;
      
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
