import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor(
    public dialogRef: MdDialogRef<ConfirmComponent>,
    @Inject(MD_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

}
