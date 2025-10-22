import { Routes } from '@angular/router';
import { guestGuard } from './guards/auth.guards';
import { Login } from './components/login/login';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {
        path: 'login',
        component: Login,
        canActivate: [guestGuard]
    }
];
