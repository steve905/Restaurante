import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'age', loadChildren: './age/age.module#AgePageModule' },
  { path: 'ngif', loadChildren: './ngif/ngif.module#NgifPageModule' },
  { path: 'ngfor', loadChildren: './ngfor/ngfor.module#NgforPageModule' },
  { path: 'turistico', loadChildren: './turistico/turistico.module#TuristicoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
