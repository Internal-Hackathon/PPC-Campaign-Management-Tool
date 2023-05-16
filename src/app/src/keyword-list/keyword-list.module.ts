import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeywordListComponent } from './keyword-list.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    KeywordListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: KeywordListComponent }
    ])
  ]
})
export default class KeywordListModule { }
