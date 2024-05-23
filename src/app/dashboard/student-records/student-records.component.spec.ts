import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsRecordComponent } from './student-records.component';

describe('StudentsRecordComponent', () => {
    let component: StudentsRecordComponent;
    let fixture: ComponentFixture<StudentsRecordComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [StudentsRecordComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(StudentsRecordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
