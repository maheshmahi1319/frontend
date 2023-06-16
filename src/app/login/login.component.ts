import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;
  errorMessage!: string;
  constructor(private apiService: ApiService,private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.apiService.login(this.username, this.password)
      .subscribe(
        (data) => {
          if (data.token) {
          this.apiService.saveToken(data.token)
            // Validate token and retrieve user role from the token
            const userRole = this.apiService.validateTokenAndGetRole(data.token);
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
            this.router.navigate(['/login']); 
          } 
          
        },
        error => {
          this.errorMessage = error;
        }
      );
  }
}
