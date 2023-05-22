import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginContComponent} from "./login-cont.component";
import {LoginPresModule} from "../../presenter/login-pres/login-pres.module";



@NgModule({
  declarations: [
    LoginContComponent
  ],
  exports: [
    LoginContComponent
  ],
  imports: [
    CommonModule,
    LoginPresModule
  ]
})
export class LoginContModule { }
