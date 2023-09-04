import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../interfaces/contact';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDialogComponent } from '../dialogs/update-dialog/update-dialog.component';
import { DeleteDialogComponent } from '../dialogs/delete-dialog/delete-dialog.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contactsDataArray: Contact[] = [];

  dataSource = new MatTableDataSource<Contact>();

  columnsToDisplay = ['FirstName', 'LastName', 'PhoneNumber', 'Address', 'Update', 'Delete'];

  constructor(private contactsService: ContactsService, private dialog: MatDialog) {

  }

  ngOnInit() {
    this.contactsDataArray = this.contactsService.getContacts();
    this.dataSource = new MatTableDataSource<Contact>(this.contactsDataArray);
    console.log(this.contactsDataArray);
  }

  onUpdate(contact: Contact) {
    let dialogRef = this.dialog.open(UpdateDialogComponent, {
      height: '500px',
      width: '500px',
      data: contact,
    });
  }

  onDelete(contact: Contact) {
    let dialogRef = this.dialog.open(DeleteDialogComponent, {
      height: '500px',
      width: '500px',
      data: contact,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.updateDataSource(this.contactsDataArray);
    });
  }

  updateDataSource(dataArray: Contact[]) {
    this.dataSource.connect().next(dataArray);
  }

}
