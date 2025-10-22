import { inject } from "@angular/core";
import { CanActivateFn } from "@angular/router";
import { AuthService } from "../services/auth.service";

export const authGuards: CanActivateFn = () => {
    const authService = inject(AuthService);
    return authService.isAuthenticated();
}

export const guestGuard: CanActivateFn = () => {
    const authService = inject(AuthService);
    return !authService.isAuthenticated();
}