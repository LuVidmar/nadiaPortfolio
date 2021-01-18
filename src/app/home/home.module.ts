import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [HomeComponent, MainComponent, AboutComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class HomeModule { }
