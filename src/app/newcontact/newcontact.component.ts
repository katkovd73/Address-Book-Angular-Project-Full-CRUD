import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../interfaces/contact';

@Component({
  selector: 'app-newcontact',
  templateUrl: './newcontact.component.html',
  styleUrls: ['./newcontact.component.scss']
})
export class NewcontactComponent {

  newContact!: Contact;

  contactForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    address: new FormControl('', [Validators.required, Validators.maxLength(200)]),
  });

  constructor(private router: Router, private contactsService: ContactsService) { }

  onSubmit() {

    this.newContact = {
      Id: 0,
      FirstName: this.contactForm.controls['firstName'].value as string,
      LastName: this.contactForm.controls['lastName'].value as string,
      PhoneNumber: this.contactForm.controls['phoneNumber'].value as string,
      Address: this.contactForm.controls['address'].value as string
    };

    this.contactsService.createContact(this.newContact);

    console.log(this.contactsService.getContacts());

    this.router.navigate(['/contacts']);
  }

  onCancel() {
    this.router.navigate(['/contacts']);
  }
}
