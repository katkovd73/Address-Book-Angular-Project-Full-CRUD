import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Contact } from 'src/app/interfaces/contact';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent {

  contactToDelete!: Contact;

  deleteForm = new FormGroup({
    firstName: new FormControl({ value: '', disabled: true }),
    lastName: new FormControl({ value: '', disabled: true }),
    phoneNumber: new FormControl({ value: '', disabled: true }),
    address: new FormControl({ value: '', disabled: true }),
  });

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Contact, private contactService: ContactsService) {
    this.contactToDelete = data;
  }

  ngOnInit() {
    this.deleteForm.controls['firstName'].setValue(this.contactToDelete.FirstName);
    this.deleteForm.controls['lastName'].setValue(this.contactToDelete.LastName);
    this.deleteForm.controls['phoneNumber'].setValue(this.contactToDelete.PhoneNumber);
    this.deleteForm.controls['address'].setValue(this.contactToDelete.Address);
  }

  onSubmit() {

    let contactId = this.contactToDelete.Id;
    this.contactService.deleteContact(contactId);

    this.dialogRef.close();
  }

}
