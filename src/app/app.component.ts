import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  constructor(private apiService: ApiService, private router: Router) {

  }
  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      // Validate token and retrieve user role from the token
      const userRole = this.apiService.validateTokenAndGetRole(token);
      // Redirect based on user role
      switch (userRole) {
        case 'admin':
                this.router.navigate(['/admin']);
                break;
              case 'superadmin':
                this.router.navigate(['/super-admin']);
                break;
              case 'poweruser':
                this.router.navigate(['/power-user']);
                break;
              case 'user':
                this.router.navigate(['/user']);
                break;
              default:
                this.router.navigate(['/login']); 
      }
    } else {
      this.router.navigate(['/login']); // Redirect to login if no token found
    }
  }
}
