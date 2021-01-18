import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Material
import { MaterialModule } from './material/material.module';

//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Notfound404Component } from './notfound404/notfound404.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    Notfound404Component,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
