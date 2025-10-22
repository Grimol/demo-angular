import { inject } from "@angular/core"
import { CanActivateFn, Router } from "@angular/router"
import { AuthService } from "../services/auth.service"

export const authGuards: CanActivateFn = () => {
    const authService = inject(AuthService)
    const router = inject(Router)

    if (!authService.isAuthenticated()) {
        router.navigate(['login'])
        return false
    }
    
    return authService.isAuthenticated()
}

export const guestGuard: CanActivateFn = () => {
    const authService = inject(AuthService)
    const router = inject(Router)

    if (authService.isAuthenticated()) {
        router.navigate([''])
        return false
    }

    return true
}