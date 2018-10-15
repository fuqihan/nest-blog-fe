import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './containers/dashboard.component';
import { MetaGuard } from '@ngx-meta/core';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    canActivate: [MetaGuard],
    data: { meta: {
        title: 'Angular universal', metaDescription: 'Seo Description'
    }}
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRouting {
}
