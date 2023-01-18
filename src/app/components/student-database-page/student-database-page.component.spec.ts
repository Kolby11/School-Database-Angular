import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDatabasePageComponent } from './student-database-page.component';

describe('StudentDatabasePageComponent', () => {
  let component: StudentDatabasePageComponent;
  let fixture: ComponentFixture<StudentDatabasePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDatabasePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDatabasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
