import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DialogueDeleteComponent} from "./dialogue-delete.component";
import {MatButtonModule, MatDialogModule} from "@angular/material";



@NgModule({
  declarations: [DialogueDeleteComponent,],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class DialogueDeleteModule { }
