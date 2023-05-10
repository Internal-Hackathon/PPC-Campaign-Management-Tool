import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignDetailsComponent } from './campaign-details.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    CampaignDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CampaignDetailsComponent }
    ])
  ]
})
export class CampaignDetailsModule { }
