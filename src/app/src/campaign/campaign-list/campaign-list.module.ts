import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignListComponent } from './campaign-list.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    CampaignListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CampaignListComponent }
    ])
  ]
})
export default class CampaignListModule { }
