import { Routes } from '@angular/router';
import { Homepage } from './composants/homepage/homepage';
import { Login } from './composants/login/login';
import { Signin } from './composants/signin/signin';

export const routes: Routes = [
    { path: '', component: Homepage },
    { path: 'login', component: Login },
    { path: 'signin', component: Signin },
    { path: 'produits', component: Homepage }, // temporary products view uses Homepage
    { path: '**', redirectTo: '' }
];
