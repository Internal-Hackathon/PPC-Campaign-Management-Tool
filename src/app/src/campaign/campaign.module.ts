import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignComponent } from './campaign.component';
import {RouterModule, Routes} from "@angular/router";
import {AppRoutes} from "../routes";

const campaignRoutes: Routes = [
  {
    path: '',
    component: CampaignComponent,
    children: [
      {
        path: '',
        redirectTo: AppRoutes.campaignHome,
        pathMatch: 'full'
      },
      {
        path: AppRoutes.campaignHome,
        loadChildren: () => import('./campaign-home/campaign-home.module'),
        title:'Campaign Home'
      },
      {
        path: AppRoutes.campaignDetails,
        loadChildren: () => import('./campaign-details/campaign-details.module'),
        title:'Campaign Details'
      },
      {
        path: AppRoutes.campaignList,
        loadChildren: () => import('./campaign-list/campaign-list.module'),
        title:'Campaign List'
      }
    ]
  }]

@NgModule({
  declarations: [
    CampaignComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(campaignRoutes)
  ]
})
export default class CampaignModule { }
