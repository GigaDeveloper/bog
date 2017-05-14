import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../../model/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  public contact = new Contact(null, null);
  @Input() editableContact: Contact;
  @Output() returnContact = new EventEmitter();
  @Output() closeContactFrom = new EventEmitter();

  constructor() { }

  saveContact() {
    if (this.editableContact.contact === null && this.editableContact.type === null) {
      this.returnContact.emit(this.contact);
    } else {
      this.closeForm();
    }
  }

  closeForm() {
    this.closeContactFrom.emit(true);
  }

  ngOnInit() {
    if (this.editableContact.contact !== null && this.editableContact.type !== null) {
      this.contact = this.editableContact;
    }
  }

}
