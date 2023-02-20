import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateStudentAndUser } from 'src/app/interfaces/Student';
import { Subject } from 'src/app/interfaces/Subject';
import { Teacher } from 'src/app/interfaces/Teacher';
import { StudentService } from 'src/app/services/student.service';
import { SubjectService } from 'src/app/services/subject.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-createorupdate',
  templateUrl: './createorupdate.component.html',
  styleUrls: ['./createorupdate.component.scss']
})
export class CreateorupdateComponent implements OnInit {
  loading: boolean = true;
  studentForm: FormGroup;
  listSubjects: Subject[] = [];
  listTeachers: Teacher[] = [];
  id: string | null;
  textSubmit: string = "Crear";
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private paramRouter: ActivatedRoute,
    private studentService: StudentService,
    private subjectService: SubjectService,
    private teacherService: TeacherService,
  ) {
    this.studentForm = this.fb.group({
      // userObject: {
        name_user: ['', Validators.required],
        age: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
      // },
      // studentObject: {
        grade_and_group: ['', Validators.required],
        observation: ['', Validators.required],
        teacherId: ['', Validators.required],
        subjects: ['', Validators.required],
      // }
    });
    this.id = this.paramRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getListSubjects();
    this.getListTeachers();
    this.getEditStudent();
    this.loading = false;
  }

  getBack(): void {
    this.route.navigate(['']);
  }

  getEditStudent(): void {
    if (this.id !== null) {
      this.textSubmit = "Editar";
      this.studentService.getStudent(parseInt(this.id)).subscribe(data => {
        this.studentForm = this.fb.group({
          name_user: [data.user?.name_user, Validators.required],
          age: [data.user?.age, Validators.required],
          email: [data.user?.email, Validators.required],
          password: ['', Validators.required],
          grade_and_group: [data.grade_and_group, Validators.required],
          observation: [data.observation, Validators.required],
          teacherId: [data.teacherId, Validators.required],
          subjects: [data.subjects, Validators.required],
        });
      })
    } else {
      this.textSubmit = "Crear";
    }
  }

  submitForm(): void {
    const userObject: any = {};
    const studentObject: any = {};
    const data = this.studentForm.value;
    Object.entries(data).forEach(([key, value]) => {
      if (!dataStudent.includes(key)) {
        userObject[key] = value;
      }
      else studentObject[key] = value;
    });
    const estructureData = {
      userObject,
      studentObject,
    }
    if (this.id !== null) {
      this.editStudent(parseInt(this.id), estructureData);
    } else {
      this.addStudent(estructureData);
      this.studentForm.reset();
    }
  }

  addStudent(estructureData: CreateStudentAndUser): void {
    this.studentService.addStudent(estructureData).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    })
  }

  editStudent(idStudent: number, estructureData: CreateStudentAndUser): void {
    this.studentService.updateStudent(idStudent, estructureData).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    })
  }

  getListSubjects(): void {
    this.subjectService.getListSubjects().subscribe(data => {
      this.listSubjects = data;
    }, error => {
      console.log(error);
    })
  }

  getListTeachers(): void {
    this.teacherService.getListTeachers().subscribe(data => {
      this.listTeachers = data;
      console.log(data);
    }, error => {
      console.log(error);
    })
  }
}

const dataStudent = ['grade_and_group', 'observation', 'subjects', 'teacherId'];