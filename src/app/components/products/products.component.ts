import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { FlashMessagesService } from 'angular2-flash-messages';
import { MainService } from '../../services/main.service';
import { Product } from '../../model/product';
import { Customer } from '../../model/customer';
import { Card } from '../../model/card';
import { Loan } from '../../model/loan';
import { Insurance } from '../../model/insurance';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public currentDate = new Date().toLocaleDateString();
  public showProductFrom: boolean = false;
  public product = new Product(null, this.currentDate, null, null, null, null);
  public card = new Card(null, null, null);
  public loan = new Loan(null, null, null, null);
  public insurance = new Insurance(null, null, null, null, null);
  public id_number: string = null;
  public selectedCustomer: Customer = null;

  constructor(
    public dialog: MdDialog,
    public mainService: MainService,
    private flashMessage: FlashMessagesService
  ) { }

  selectCustomer(customer) {
    this.selectedCustomer = customer;
  }

  setProductType(callback) {
    switch (this.product.type) {
      case 'card':
        this.product.extra_details = this.card;
        break;
      case 'loan':
        this.product.extra_details = this.loan;
        break;
      case 'insurance':
        this.product.extra_details = this.insurance;
        break;
      default:
        this.product.extra_details = null;
    }
    callback();
  }

  onSubmit() {
    this.setProductType(()=>{
      this.mainService.addProductToCustomer(this.selectedCustomer.id, this.product, () => {
        this.id_number = null;
        this.showProductFrom = false;
        this.product = new Product(null, this.currentDate, null, null, null, null);
        this.selectedCustomer = new Customer(null, null, null, null, null, null, null, null, [], [], []);
        this.flashMessage.show('Product have added successfully', {cssClass: 'alert-success', timeout: 3000});
      });
    });
  }

  ngOnInit() {

  }

}
