import { Routes } from '@angular/router';
// import { LandingComponent } from './dashboard/landing/landing.component'
// import { StudentsRecordComponent } from './dashboard/student-records/student-records.component'
import { LoginComponent } from './auth/login/login.component';
import { authGuardGuard } from './auth/auth-guard.guard';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { SignupComponent } from './auth/signup/signup.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(n=>n.DashboardModule),
    canMatch: [authGuardGuard]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }

];
