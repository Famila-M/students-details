import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  constructor(
    private http: HttpClient
  ) {}

  callGetStudentsRecords(): Observable<any> {
    return this.http.get("/api/students");
  }

  callGetStudentsDetailsRecords(): Observable<any> {
    return this.http.get("/api/students-details");
  }

  callGetStudentsAddressRecords(): Observable<any> {
    return this.http.get("/api/addresses");
  }

  callStudentsMarks(): Observable<any> {
    return this.http.get("/api/studentsMarks");
  }
}
