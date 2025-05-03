import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth-service.service';
import { Router } from '@angular/router';
declare var createGoogleEvent: any;


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  standalone:false,
})
export class HomePageComponent{
userEmail: any;
Name:any;
  constructor(private authService: AuthService,private router: Router) {
    this.loadUser();
  }

  async loadUser() {
    const user = await this.authService.getCurrentUser();
    if (user) {
      this.userEmail = user.email ?? ''; 
      if(this.userEmail == 'delhideganto@gmail.com'){
        this.Name = 'Gogol'
      }
      else if (this.userEmail == 'dgtaniya30@gmail.com'){
        this.Name = 'Mintu'
      }
    }
  }

  async logout() {
    await this.authService.logout();
    this.router.navigate(['/login']);
  }
}