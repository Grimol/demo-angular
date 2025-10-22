import { computed, Injectable, signal } from "@angular/core"

@Injectable({providedIn: 'root'})
export class AuthService {
    private currentUserSignal = signal<boolean>(false)

    isAuthenticated = computed(() => this.currentUserSignal() !== false)

    login(email: string, password: string): boolean {
        if (email === 'test@example.com' && password === 'password123') {
            this.currentUserSignal.set(true)
            return true
        }
        return false
    }
}
