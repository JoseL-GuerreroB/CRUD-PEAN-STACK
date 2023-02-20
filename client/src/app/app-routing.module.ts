import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateorupdateComponent } from './pages/createorupdate/createorupdate.component';
import { StudentComponent } from './pages/student/student.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { TeacherComponent } from './pages/teacher/teacher.component';

const routes: Routes = [
  { path: '', component: StudentComponent},
  { path: 'maestros', component: TeacherComponent },
  { path: 'materias', component: SubjectComponent },
  { path: 'register_student', component: CreateorupdateComponent },
  { path: 'edit_student/:id', component: CreateorupdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
