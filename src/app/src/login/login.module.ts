import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from "./login.component";
import {RouterModule} from "@angular/router";
import {AppHeaderContModule} from "../../../components/app-header/container/app-header-cont/app-header-cont.module";


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AppHeaderContModule,
    RouterModule.forChild([
      {path: '', component: LoginComponent}
    ])
  ]
})
export default class LoginModule {
}
