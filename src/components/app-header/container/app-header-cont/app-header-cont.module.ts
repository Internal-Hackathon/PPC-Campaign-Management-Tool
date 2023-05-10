import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppHeaderContComponent} from "./app-header-cont.component";
import {AppHeaderPresModule} from "../../presenter/app-header-pres/app-header-pres.module";



@NgModule({
  declarations: [
    AppHeaderContComponent
  ],
  exports: [
    AppHeaderContComponent
  ],
  imports: [
    CommonModule,
    AppHeaderPresModule
  ]
})
export class AppHeaderContModule { }
