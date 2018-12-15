import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { TasksComponent } from './tasks/tasks.component';
import { UsersComponent } from './users/users.component';

import { AuthService } from './services/auth.service';
import { TaskService } from './services/task.service';
import { TokenInterceptorService } from './services/token-interceptor.service';

import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    TasksComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    TaskService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
