import { Component } from '@angular/core';
import { AuthService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  standalone:false
})
export class LandingPageComponent {
openLogin() {
  this.router.navigate(['/login']); 
}
  userEmail: string = '';
  Name: any;

  constructor(private authService: AuthService, private router: Router) {
    this.loadUser();
  }

  async loadUser() {
    const user = await this.authService.getCurrentUser();
    if (user) {
      if(user.email == 'delhideganto@gmail.com'){
        this.Name = 'Gogol';
      }
      else if(user.email == 'dgtaniya30@gmail.com'){
        this.Name = 'Mintu';
      } 
    }
  }

  async logout() {
    await this.authService.logout();
    this.router.navigate(['/login']);
  }
}
