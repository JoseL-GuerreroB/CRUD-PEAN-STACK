export interface CreateSubject {
  subject: string,
}

export interface Subject extends CreateSubject {
  id: number,
  createdAt: string,
  updatedAt: string,
}

export interface allDataSubject extends Subject {
  subjects_from_students: object,
}