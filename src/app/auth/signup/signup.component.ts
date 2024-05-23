import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupFormModel: any = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  constructor(
    public authService: AuthService,
    public router: Router
  ) {}

  signup(form: NgForm) {
    if (form.valid) {
      this.authService.signup(this.signupFormModel).subscribe(
        success => {
          if (success) {
            this.router.navigate(['/dashboard/landing']); // Redirect to landing page after successful signup
          } else {
            console.error('User with this email already exists.');
          }
        },
        error => {
          console.error('Signup failed', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}
