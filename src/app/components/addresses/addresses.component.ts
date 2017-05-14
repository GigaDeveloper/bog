import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Address } from '../../model/address';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {

  public address = new Address(null, null);
  @Input() editableAddress: Address;
  @Output() returnAddress = new EventEmitter();
  @Output() closeAddressFrom = new EventEmitter();

  constructor() { }

  saveAddress() {
    if (this.editableAddress.address === null && this.editableAddress.type === null) {
      this.returnAddress.emit(this.address);
    } else {
      this.closeForm();
    }
  }

  closeForm() {
    this.closeAddressFrom.emit(true);
  }

  ngOnInit() {
    if (this.editableAddress.address !== null && this.editableAddress.type !== null) {
      this.address = this.editableAddress;
    }
  }

}
