import Student from "../models/Student.js";
import Subject from "../models/Subject.js";
import Teacher from "../models/Teacher.js";
import User from "../models/User.js";
import { findSubjectsToStudent } from "./subject.controller.js";
import { createUser, deleteUser, updateUser } from "./user.controller.js";

export const createStudent = async (req, res) => {
  const { userObject, studentObject } = req.body;
  try {
    const user = await createUser(userObject);
    studentObject.userId = user.id;
    if (!studentObject.subjects || studentObject.subjects.length === 0)
      throw new Error('No puedes crear alumnos sin asignarle materias');
    const subjects = await findSubjectsToStudent(studentObject.subjects);
    studentObject.subjects = undefined;
    const newStudent = studentObject;
    let student = await Student.create(newStudent);
    await student.addSubjects(subjects);
    student = await Student.findOne({
      include: [User, { model: Teacher, include: [User] }, Subject],
      where: {
        id: student.id,
      },
    });
    return res.status(201).json(student);
  } catch (error) {
    console.log(error);
    return res.json({ message: error.message });
  }
}

export const findAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll({
      include: [{
        model: User
      }]
    });
    return res.status(200).json(students);
  } catch (error) {
    return res.json({ message: error.message });
  }
}

export const findOneStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findOne({
      include: [User, {model: Teacher, include: [User]}, Subject],
      where: {
        id,
      },
    });
    if (!student) throw new Error('El alumno no fue encontrado');
    return res.status(200).json(student);
  } catch (error) {
    return res.json({ message: error.message });
  }
}

export const updateStudent = async (req, res) => {
  const { userObject, studentObject } = req.body;
  const { id } = req.params;
  try {
    let student = await Student.findOne({
      where: { id },
    });
    if (!student) throw new Error('El alumno no fue encontrado');
    let subjects = await findSubjectsToStudent(studentObject.subjects);
    studentObject.subjects = undefined;
    const newStudent = studentObject;
    student.set(newStudent);
    student = await student.save();
    await student.setSubjects(subjects);
    await updateUser(userObject, student.userId);
    student = await Student.findOne({
      include: [User, { model: Teacher, include: [User] }, Subject],
      where: { id },
    })
    return res.status(200).json(student);
  } catch (error) {
    return res.json({ message: error.message });
  }
}

export const deleteStudent = async (req, res) => {
  try {
    let student = await Student.findOne({
      include: [{
        model: User
      }],
      where: { id: req.params.id },
    });
    if (!student) throw new Error('El alumno no fue encontrado');
    await student.setSubjects([]);
    await Student.destroy({
      where: { id: req.params.id },
    });
    await deleteUser(student.user.id);
    return res.status(200).json({ message: 'El estudiante se ha eliminado' });
  } catch (error) {
    return res.json({ message: error.message });
  }
}

export const studentsForTeacher = async (id) => {
  const students = await Student.findAll({
    include: [{
      model: User
    }],
    where: { teacherId: id },
  });
  return students;
}