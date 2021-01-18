import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { MaterialModule } from '../material/material.module';
import { IndexComponent } from './index/index.component';



@NgModule({
  declarations: [HomeComponent, MainComponent, AboutComponent, IndexComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class HomeModule { }
