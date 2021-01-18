import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcademicComponent } from './categories/academic/academic.component';
import { HobbiesComponent } from './categories/hobbies/hobbies.component';
import { SportsComponent } from './categories/sports/sports.component';
import { VolunteeringComponent } from './categories/volunteering/volunteering.component';
import { HomeComponent } from './home/home.component';
import { Notfound404Component } from './notfound404/notfound404.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '404', component: Notfound404Component },
  { path: 'academic', component: AcademicComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'volunteering', component: VolunteeringComponent },
  { path: '**',   redirectTo: '/404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
