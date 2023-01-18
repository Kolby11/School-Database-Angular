import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StudentService } from '../services/student.service';
import { StudentAddEditComponent } from '../student-add-edit/student-add-edit.component';

@Component({
  selector: 'app-student-database-page',
  templateUrl: './student-database-page.component.html',
  styleUrls: ['./student-database-page.component.scss'],
})
export class StudentDatabasePageComponent {
  title = 'Student_database';

  displayedColumns: string[] = [
    'id',
    'first_name',
    'last_name',
    'class',
    'date_of_birth',
    'age',
    'division',
    'gender',
    'average',
    'disabled',
    'achievements',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  input: any;

  constructor(
    private _dialog: MatDialog,
    private _studentService: StudentService
  ) {}
  ngOnInit(): void {
    this.getStudentList();
  }
  openAddEditStudentForm() {
    this._dialog.open(StudentAddEditComponent);
  }

  getStudentList() {
    this._studentService.getStudentList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
