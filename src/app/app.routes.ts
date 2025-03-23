import { Routes } from '@angular/router';
import { LoginPageComponent } from './nav-bar/login-page/login-page.component'; 
import { SignupPageComponent } from './nav-bar/signup-page/signup-page.component';

export const routes: Routes = [

    { path: 'login',component: LoginPageComponent },
    { path: 'signup',component: SignupPageComponent },

];

