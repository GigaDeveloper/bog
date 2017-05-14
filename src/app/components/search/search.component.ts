import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import {MainService} from '../../services/main.service';
import {CustomerDetailsComponent} from '../customer-details/customer-details.component';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public order: string = 'name';
  public asc: boolean = false;
  public selectedCustomer: Customer = null;

  constructor(
    public dialog: MdDialog,
    public mainService: MainService
  ) { }

  selectCustomer(customer) {
    this.selectedCustomer = customer;
  }

  setSortBy(order) {
    this.order = order;
    if (this.order == order) {
      this.asc = !this.asc;
    } else {
      this.asc = true;
    }
  }

  more_details(customer) {
    this.dialog.open(CustomerDetailsComponent, {
      data: customer,
    });
  }

  ngOnInit() {
  }

}
