import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthguardService } from './core/services/authguard.service';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
  { path: 'authors', loadChildren: 'app/authors/authors.module#AuthorsModule' },
  { path: 'books', loadChildren: 'app/books/books.module#BooksModule' },
  { 
    path: 'admin', 
    loadChildren: 'app/admin/admin.module#AdminModule',
    canActivate: [
      AuthguardService
    ] 
  },
  { path: 'login', loadChildren: 'app/login/login.module#LoginModule' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
