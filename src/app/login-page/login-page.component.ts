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

  username= '';
  password = '';

  constructor(private authService: AuthService,private router: Router) {}
  async login() {
    try {
      const user = await this.authService.login(this.username, this.password);
      console.log("USER "+user); 
      this.router.navigate(['/home']);
    } catch (error: any) {
      console.log("ERROR "+error); 
    }
  }

}