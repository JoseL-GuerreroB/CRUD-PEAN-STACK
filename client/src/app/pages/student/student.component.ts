import { allDataStudent, Student } from 'src/app/interfaces/Student';
import { StudentService } from 'src/app/services/student.service';
import { Component, OnInit } from '@angular/core';
// import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
// import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FindonestudentComponent } from 'src/app/components/findonestudent/findonestudent.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  errorMessage: object = {};

  constructor(
    private studentService: StudentService,
    public dialog: MatDialog,
    private route: Router,
  ) {}

  listStudents: Student[] = [];
  oneStudent!: allDataStudent;
  displayedColumns: string[] = ['Nombre', 'Edad', 'Correo', 'Grado y grupo', 'Observación', 'Acciones'];
  dataSource = new MatTableDataSource<Student>();

  ngOnInit(): void {
    this.getListStudents();
  }

  // @ViewChild(MatPaginator) paginator!: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  openDialog(idStudent: number): void {
    this.studentService.getStudent(idStudent).subscribe(data => {
      this.dialog.open(FindonestudentComponent, {
        data: data,
      });
    }, error => console.log(error))
  }

  getRegisterStudent() {
    this.route.navigate(['register_student']);
  }

  getEditStudent(idStudent: number) {
    this.route.navigate([`edit_student/${idStudent}`]);
  }

  getListStudents() {
    this.studentService.getListStudents().subscribe(data => {
      this.dataSource.data = data;
      this.listStudents = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  getStudent(idStudent: number) {
    this.studentService.getStudent(idStudent).subscribe(data => {
      this.oneStudent = data;
    }, error => console.log(error))
  }

  deleteStudent(idStudent: number) {
    this.studentService.deleteStudent(idStudent).subscribe(data => {
      console.log(data);
      this.studentService.getListStudents().subscribe(data => {
        this.dataSource.data = data;
        this.listStudents = data;
      }, error => console.log(error))
    }, error => console.log(error))
  }
}
