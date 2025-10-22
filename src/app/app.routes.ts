import { Routes } from '@angular/router'
import { authGuards, guestGuard } from './guards/auth.guards'
import { Login } from './components/login/login'
import { Home } from './components/home/home'
import { Dashboard } from './components/dashboard/dashboard'

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'login', component: Login, canActivate: [guestGuard] },
    { path: 'dashboard', component: Dashboard, canActivate: [authGuards] }
]
