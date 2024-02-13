import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', pathMatch: 'full', component: HomeComponent },
    { path: 'profile', pathMatch: 'full', component: ProfileComponent },
];


