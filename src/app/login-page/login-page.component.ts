import { Component} from '@angular/core';
import { AuthService } from '../auth-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  standalone:false
})
export class LoginPageComponent {
  message = '';
  email= '';
  password = '';
  isStyled = false;
Name: any;
  constructor(private authService: AuthService,private router: Router) {}
  async login() {
    try {
      const user = await this.authService.login(this.email, this.password);
      this.router.navigate(['/home']); 
    } catch (error: any) {
      this.isStyled = !this.isStyled; 
      setTimeout(() => { 
        this.closeModal();
      }, 2000);
    }
  }

  closeModal() {
    this.isStyled = false; 
  }
}