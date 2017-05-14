import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(
    public dialogRef: MdDialogRef<ConfirmComponent>
  ) { }

  confirm() {
    this.dialogRef.close(true);
  }

  ngOnInit() {
  }

}
