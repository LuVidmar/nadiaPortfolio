import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CategoriesComponent } from './categories/categories.component';
import { FileComponent } from './file/file.component';
import { HomeComponent } from './home/home.component';
import { Notfound404Component } from './notfound404/notfound404.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '404', component: Notfound404Component },
  { path: 'file/:year/:cat/:id', component: FileComponent },
  { path: 'edit/:year/:cat/:id', component: AdminComponent },
  { path: 'academic', component: CategoriesComponent, data: { category: 'academic' } },
  { path: 'hobbies', component: CategoriesComponent, data: { category: 'hobbies' } },
  { path: 'sports', component: CategoriesComponent, data: { category: 'sports' } },
  { path: 'volunteering', component: CategoriesComponent, data: { category: 'volunteering' } },
  { path: 'home',   redirectTo: '', pathMatch: 'full' },
  { path: '**',   redirectTo: '/404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
