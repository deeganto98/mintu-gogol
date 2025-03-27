import { Component,HostListener  } from '@angular/core';
import { AuthService } from './auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:false,
})
export class AppComponent {
  constructor(private authService: AuthService,private router: Router) {}

  ngOnInit() {
    this.authService.getAuthState().subscribe((isLoggedIn) => {
      if (!isLoggedIn) {
        this.router.navigate(['/login']); 
      }
    });
  }

  @HostListener('window:beforeunload', ['$event'])
  async onBeforeUnload(event: Event) {
    await this.authService.logout(); 
  }
}
