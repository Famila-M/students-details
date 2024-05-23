import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { NavigationExtras, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginFormModel: any = {
    username: "",
    password: ""
};
  constructor(
    public authService: AuthService,
    public router: Router
  ) {}

  login(form: any) {
    this.authService.login(this.loginFormModel.username, this.loginFormModel.password).subscribe(
      success => {
        if (success) {
          const redirectUrl = '/dashboard';
          this.router.navigate([redirectUrl]);
        } else {
          alert("Invalid username or password");
        }
      }
    );
  }

  logout() {
    this.authService.logout();
  }
}
