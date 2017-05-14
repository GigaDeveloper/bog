import { Pipe, PipeTransform } from '@angular/core';
import {Customer} from "../model/customer";

@Pipe({
  name: 'filterByIdNumber'
})
export class FilterByIdNumberPipe implements PipeTransform {

  transform(customers: Customer[], args: any): any {
    return customers.filter(customer => customer.id_number.indexOf(args) !== -1);
  }

}
