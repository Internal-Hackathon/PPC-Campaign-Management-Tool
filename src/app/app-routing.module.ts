import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutes} from "./src/routes";

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      redirectTo: AppRoutes.login,
      pathMatch: 'full'
    },
    {
      path: AppRoutes.login,
      loadChildren: () => import('../app/src/login/login.module'),
      title:'Login'
    },
    {
      path: AppRoutes.campaign,
      loadChildren: () => import('../app/src/campaign/campaign.module')
    },
    {
      path: AppRoutes.keywordList,
      loadChildren: () => import('../app/src/keyword-list/keyword-list.module'),
      title:'Keyword List'
    },
    {
      path: AppRoutes.products,
      loadChildren: () => import('../app/src/products/products.module'),
      title:'Products'
    },
    ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
