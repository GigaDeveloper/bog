import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ConfirmComponent } from '../confirm/confirm.component';
import { MainService } from '../../services/main.service';
import { Customer } from '../../model/customer';
import { Contact } from '../../model/contact';
import { Address } from '../../model/address';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  public showCustomerFrom: boolean = false;
  public customer = new Customer(null, null, null, null, null, null, null, null, [], [], []);

  public showContactFrom: boolean = false;
  public editableContact = new Contact(null, null);

  public showAddressFrom: boolean = false;
  public editableAddress = new Address(null, null);

  constructor(
    public dialog: MdDialog,
    public mainService: MainService,
    private flashMessage: FlashMessagesService
  ) { }

  onSubmit() {
    this.setUniqueId(()=>{
      this.mainService.addCustomer(this.customer, () => {
        this.showCustomerFrom = false;
        this.customer = new Customer(null, null, null, null, null, null, null, null, [], [], []);
        this.flashMessage.show('Customer have added successfully', {cssClass: 'alert-success', timeout: 3000});
      });
    });

  }

  setUniqueId(callback) {
    this.customer.id = new Date().getTime() + Math.random();
    callback();
  }

  setReturnedContact(contact) {
    this.showContactFrom = false;
    this.customer.contacts.push(contact);
    this.editableContact = new Contact(null, null);
  }

  editContact(contact) {
    this.showContactFrom = false;
    this.editableContact = contact;
    setTimeout(()=>{
      this.showContactFrom = true;
    },0);
  }

  setCloseContactFrom(bool) {
    if (bool) {
      this.editableContact = new Contact(null, null);
      this.showContactFrom = false;
    }
  }

  contactConfirmDialog(contact) {
    let dialogRef = this.dialog.open(ConfirmComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteContact(contact);
      }
    });
  }

  deleteContact(contact) {
    let index = this.customer.contacts.indexOf(contact, 0);
    if (index > -1) {
      this.customer.contacts.splice(index, 1);
    }
  }

  setReturnedAddress(address) {
    this.showAddressFrom = false;
    this.customer.addresses.push(address);
    this.editableAddress = new Address(null, null);
  }

  editAddress(address) {
    this.showAddressFrom = false;
    this.editableAddress = address;
    setTimeout(()=>{
      this.showAddressFrom = true;
    },0);
  }

  setCloseAddressFrom(bool) {
    if (bool) {
      this.editableAddress = new Address(null, null);
      this.showAddressFrom = false;
    }
  }

  addressConfirmDialog(address) {
    let dialogRef = this.dialog.open(ConfirmComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteAddress(address);
      }
    });
  }

  deleteAddress(address) {
    let index = this.customer.addresses.indexOf(address, 0);
    if (index > -1) {
      this.customer.addresses.splice(index, 1);
    }
  }

  ngOnInit() {
  }

}
