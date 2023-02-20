import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/env/env';
import { Teacher } from '../interfaces/Teacher';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  baseURL = `${env.endPoint}/teacher`;
  constructor(private http: HttpClient) { }

  getListTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.baseURL);
  }
}
