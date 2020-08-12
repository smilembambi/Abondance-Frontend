import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewletterComponent } from './newletter.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [NewletterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class NewletterModule { }
