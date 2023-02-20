import { Teacher } from "./Teacher";
import { CreateUser, User } from "./User";

interface CreateStudent {
  grade_and_group: string,
  observation: string,
  teacherId: number,
  subjects?: number[],
}

export interface CreateStudentAndUser {
  userObject: CreateUser,
  studentObject: CreateStudent,
}

export interface UpdateStudentAndUser extends CreateStudentAndUser {}

export interface Student {
  id: number,
  grade_and_group: string,
  observation: string,
  userId: number,
  teacherId: number,
  user?: User,
}

export interface allDataStudent extends Student {
  teacher: Teacher,
  subjects: any[],
}
