import { Student } from "./Student";
import { CreateUser, User } from "./User";

interface CreateTeacher {
  salary: number,
  specialty: string,
}

export interface CreateTeacherAndUser {
  userObject: CreateUser,
  teacherObject: CreateTeacher,
}

export interface UpdateTeacherAndUser extends CreateTeacherAndUser {}

export interface Teacher extends CreateTeacher {
  id: number,
  userId: number,
  user?: User
}

export interface allDataTeacher extends Teacher {
  students: Student[]
}