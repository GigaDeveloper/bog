import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { Product } from '../model/product';

@Injectable()
export class MainService {

  public customers: Customer[] = [];

  constructor() { }

  addCustomer(customer, callback) {
    this.customers.push(customer);
    callback();
  }

  addProductToCustomer(customer_id, product, callback) {
    for (let customer of this.customers) {
      if (customer_id == customer.id) {
        customer.products.push(product);
        break;
      }
    }
    callback();
  }

}
