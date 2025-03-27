import { Component } from '@angular/core';
import { AuthService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  standalone:false
})
export class UserHomeComponent {
  userEmail: string = '';
  Name: any;

  constructor(private authService: AuthService, private router: Router) {
    this.loadUser();
  }

  async loadUser() {
    const user = await this.authService.getCurrentUser();
    if (user) {
      this.userEmail = user.email ?? ''; 
    }
  }

  async logout() {
    await this.authService.logout();
    this.router.navigate(['/login']);
  }
}
