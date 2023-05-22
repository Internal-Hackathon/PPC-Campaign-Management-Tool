import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginPresComponent} from "./login-pres.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    LoginPresComponent
  ],
  exports: [
    LoginPresComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ]
})
export class LoginPresModule { }
