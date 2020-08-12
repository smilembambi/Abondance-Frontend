import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MotPasseForgetComponent } from './mot-passe-forget/mot-passe-forget.component';
import { RegisterComponent } from './register/register.component';
import { RestoreComponent } from './restore/restore.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [LoginComponent, MotPasseForgetComponent, RegisterComponent, RestoreComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ]
})
export class AuthModule { }
