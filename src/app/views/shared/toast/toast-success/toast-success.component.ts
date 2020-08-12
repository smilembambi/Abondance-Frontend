import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from "@angular/material";

@Component({
  selector: 'app-toast-success',
  templateUrl: './toast-success.component.html',
  styleUrls: ['./toast-success.component.scss']
})
export class ToastSuccessComponent implements OnInit {


  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit() {

  }

}
