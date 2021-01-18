import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Material
import { MaterialModule } from './material/material.module';

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Notfound404Component } from './notfound404/notfound404.component';


@NgModule({
  declarations: [
    AppComponent,
    Notfound404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
