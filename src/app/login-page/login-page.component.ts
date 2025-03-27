import { Component } from '@angular/core';
import { AuthService } from '../auth-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  standalone:false
})
export class LoginPageComponent {
  email = '';
  password = '';
  message = '';
Name: any;
  constructor(private authService: AuthService,private router: Router) {}
  async login() {
    try {
      const user = await this.authService.login(this.email, this.password);
      this.router.navigate(['/home']);  // ✅ Redirect to home on success
    } catch (error: any) {
      this.message = error.message;
    }
  }
}
