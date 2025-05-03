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

  constructor(private router: Router) {
  }

}
