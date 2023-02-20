import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/env/env';
import { Subject } from '../interfaces/Subject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private baseURL = `${env.endPoint}/subject`;
  constructor(private http: HttpClient) { }

  getListSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.baseURL);
  }
}
