import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, delay, map, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isLoggedIn = false;
  redirectUrl: string | null = null;
  private users: any[] = [];
  http: any;
  apiUrl: any;

  constructor(private router: Router) {}

  login(username: string, password: string): Observable<boolean> {
    const user = this.users.find(u => u.username === username && u.password === password);
    return of(!!user).pipe(
      delay(1000),
      tap(loggedIn => this.isLoggedIn = loggedIn)
    );
  }

  signup(user: any): Observable<boolean> {
    if (this.users.find(u => u.email === user.email)) {
      return of(false); // User with this email already exists
    }
    this.users.push(user);
    this.isLoggedIn = true; // Set isLoggedIn to true after successful signup
    return of(true).pipe(
      delay(1000)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
}

}
