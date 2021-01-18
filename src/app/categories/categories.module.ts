import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicComponent } from './academic/academic.component';
import { SportsComponent } from './sports/sports.component';
import { VolunteeringComponent } from './volunteering/volunteering.component';
import { HobbiesComponent } from './hobbies/hobbies.component';



@NgModule({
  declarations: [AcademicComponent, SportsComponent, VolunteeringComponent, HobbiesComponent],
  imports: [
    CommonModule
  ]
})
export class CategoriesModule { }
