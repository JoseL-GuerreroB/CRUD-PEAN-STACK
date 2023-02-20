export interface CreateUser {
  name_user: string,
  age: number,
  email: string,
  password: string,
}

export interface User extends CreateUser {
  id: number,
  createdAt: string,
  updatedAt: string
}