import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts: Contact[] = [
    { Id: 1, FirstName: 'John', LastName: 'Johnson', PhoneNumber: '111-111-1111', Address: '111 Main St, Minneapolis, MN 55001' },
    { Id: 2, FirstName: 'Jack', LastName: 'Jackson', PhoneNumber: '222-222-2222', Address: '222 Main St, Minneapolis, MN 55001' },
    { Id: 3, FirstName: 'Mary', LastName: 'Erickson', PhoneNumber: '333-333-3333', Address: '333 Main St, Minneapolis, MN 55001' }
  ]

  constructor() { }

  getContacts() {
    return this.contacts;
  }

  createContact(newContact: Contact) {

    // finding highest Id
    let highestId = 0;
    this.contacts.forEach(contactObject => {
      if (contactObject.Id > highestId) {
        highestId = contactObject.Id;
      }
    })

    // adding new contact to array
    this.contacts.push(
      {
        Id: highestId + 1,
        FirstName: newContact.FirstName,
        LastName: newContact.LastName,
        PhoneNumber: newContact.PhoneNumber,
        Address: newContact.Address
      }
    );

  }

  updateContact(updateContact: Contact) {
    const index = this.contacts.findIndex(contact => contact.Id == updateContact.Id);
    this.contacts[index].FirstName = updateContact.FirstName;
    this.contacts[index].LastName = updateContact.LastName;
    this.contacts[index].PhoneNumber = updateContact.PhoneNumber;
    this.contacts[index].Address = updateContact.Address;
  }

  deleteContact(id: number) {
    const index = this.contacts.findIndex(contact => contact.Id == id);
    this.contacts.splice(index, 1);
  }
}
