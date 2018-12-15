import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { TasksComponent } from './tasks/tasks.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { UsersComponent } from './users/users.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    component:  TasksComponent
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    component: SignupComponent 
  },
  {
    path: 'signin',
    component: SigninComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
