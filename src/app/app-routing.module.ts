import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Notfound404Component } from './notfound404/notfound404.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '404', component: Notfound404Component },
  { path: '**',   redirectTo: '/404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
