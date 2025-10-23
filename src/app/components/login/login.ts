import { Component, inject, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login implements OnInit{
// Injection des dépendances
  private formBuilder = inject(FormBuilder)
  private authService = inject(AuthService)
  private router = inject(Router)

  loginForm!: FormGroup

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
  
  onSubmit(): void {
    console.log(this.loginForm.value)
    if (this.authService.login(this.loginForm.value.email, this.loginForm.value.password)) {
      this.router.navigate([''])
    } else {
      alert('Échec de l\'authentification. Veuillez vérifier vos identifiants.')
    }
  }
}
