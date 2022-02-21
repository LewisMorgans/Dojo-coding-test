import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppPaths } from '../shared/enum/app-paths';
import { IndexComponent } from '../components/index/index.component';

const appRoutes: Routes = [
  {
    path: AppPaths.Root,
    component: IndexComponent,
  },
  {
    path: AppPaths.Countries,
    loadChildren: () => import('../components/countries/countries.module').then(m => m.CountriesModule),
    data: { preventRouteReuse: true },
  },
];

appRoutes.push({ path: '**', redirectTo: AppPaths.Root });

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
