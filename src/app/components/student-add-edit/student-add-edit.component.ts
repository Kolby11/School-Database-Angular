import { StudentService } from './../services/student.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { AppModule } from 'src/app/app.module';

@Component({
  selector: 'app-student-add-edit',
  templateUrl: './student-add-edit.component.html',
  styleUrls: ['./student-add-edit.component.scss'],
})
export class StudentAddEditComponent {
  studentForm: FormGroup;

  genders: string[] = ['Male', 'Female'];
  classes: string[] = ['1.A', '1.B', '2.A', '2.B', '3.A', '3.B', '4.A', '4.B'];
  divisions: string[] = [
    'Science',
    'Biology',
    'Artificial Intelligence',
    'Biomedicine',
  ];
  constructor(
    private _fb: FormBuilder,
    private _studentService: StudentService,
    private _dialogRef: DialogRef<StudentAddEditComponent>
  ) {
    this.studentForm = this._fb.group({
      first_name: '',
      last_name: '',
      class: '',
      date_of_birth: '',
      age: '',
      division: '',
      gender: '',
      average: '',
      disabled: '',
      awards: '',
    });
  }
  onFormSubmit() {
    if (this.studentForm.valid) {
      const date = new Date();
      this.studentForm.value.age = Math.round(
        (date.getTime() - this.studentForm.value.datum_narodenia.getTime()) /
          (360 * 24 * 60 * 60 * 1000)
      );
      this._studentService.addStudent(this.studentForm.value).subscribe({
        next: (val: any) => {
          this._dialogRef.close();
        },
        error: (err: any) => {
          console.error(err);
        },
      });
    }
  }
}
