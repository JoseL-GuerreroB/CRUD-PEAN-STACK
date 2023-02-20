import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from 'src/env/env';/* Importing the Observable class from the RxJS library. */

import { Observable } from 'rxjs';
import { allDataStudent, CreateStudentAndUser, Student, UpdateStudentAndUser } from '../interfaces/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseURL: string = `${env.endPoint}/student`;
  constructor(private Http: HttpClient) { }

  getListStudents(): Observable<Student[]> {
    return this.Http.get<Student[]>(this.baseURL);
  }

  addStudent(data: CreateStudentAndUser): Observable<allDataStudent> {
    return this.Http.post<allDataStudent>(this.baseURL, data);
  }

  getStudent(idStudent: number): Observable<allDataStudent> {
    return this.Http.get<allDataStudent>(`${this.baseURL}/${idStudent}`);
  }

  updateStudent(idStudent: number, data: UpdateStudentAndUser): Observable<allDataStudent> {
    return this.Http.put<allDataStudent>(`${this.baseURL}/${idStudent}`, data);
  }

  deleteStudent(idStudent: number): Observable<any> {
    return this.Http.delete<any>(`${this.baseURL}/${idStudent}`);
  }
}
