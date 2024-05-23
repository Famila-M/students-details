import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NgbDatepickerModule, NgbHighlight, NgbModalRef, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgGridModule } from 'ag-grid-angular';
import { StudentRecordsComponent } from './student-records/student-records.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardService } from './dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { StudentsMarksComponent } from './students-marks/students-marks.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard/landing',
        pathMatch: 'full'
      },
      {
        path: 'landing',
        component: LandingComponent
      },
      {
        path: 'students',
        component: StudentRecordsComponent
      },
      {
        path: 'students-marks',
        component: StudentsMarksComponent
      }
    ]
  }
]

@NgModule({
  declarations: [LandingComponent, SideBarComponent, StudentRecordsComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NgbHighlight,
    AgGridModule,
    NgbTypeaheadModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    RouterModule.forChild(
      routes
    )
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
