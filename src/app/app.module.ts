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
import { CategoriesComponent } from './categories/categories.component';
import { FileComponent } from './file/file.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireStorageModule } from '@angular/fire/storage';


@NgModule({
  declarations: [
    AppComponent,
    Notfound404Component,
    NavbarComponent,
    CategoriesComponent,
    FileComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HomeModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
