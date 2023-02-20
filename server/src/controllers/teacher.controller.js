import Student from "../models/Student.js";
import Teacher from "../models/Teacher.js";
import User from "../models/User.js";
import { studentsForTeacher } from "./student.controller.js";
import { createUser, deleteUser, updateUser } from "./user.controller.js";

export const createteacher = async (req, res) => {
  const { userObject, teacherObject } = req.body;
  try {
    const user = await createUser(userObject);
    teacherObject.userId = user.id;
    let teacher = await Teacher.create(teacherObject);
    teacher = await Teacher.findOne({
      include: [User, { model: Student, include: [User] }], where: { id: teacher.id },
    })
    return res.status(201).json(teacher);
  } catch (error) {
    return res.json({ message: error.message });
  }
}

export const findAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.findAll({
      include: [{
        model: User
      }]
    });
    return res.status(200).json(teachers);
  } catch (error) {
    return res.json({ message: error.message });
  }
}

export const findOneTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findOne({
      include: [User, { model: Student, include: [User] }],
      where: {
        id: req.params.id,
      },
    });
    if (!teacher) throw new Error('El maestro no fue encontrado');
    return res.status(200).json(teacher);
  } catch (error) {
    console.log(error);
    return res.json({ message: error.message });
  }
}

export const updateTeacher = async (req, res) => {
  const { userObject, teacherObject } = req.body;
  const { id } = req.params;
  try {
    let teacher = await Teacher.findOne({
      where: { id },
    });
    if (!teacher) throw new Error('El maestro no fue encontrado');
    teacher.set(teacherObject);
    teacher = await teacher.save();
    await updateUser(userObject, teacher.userId);
    teacher = await Teacher.findOne({
      include: [User, { model: Student, include: [User] }],
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json(teacher);
  } catch (error) {
    return res.json({ message: error.message });
  }
}

export const deleteTeacher = async (req, res) => {
  try {
    let teacher = await Teacher.findOne({
      include: [{
        model: User
      }],
      where: { id: req.params.id },
    });
    if (!teacher) throw new Error('El maestro no fue encontrado');
    await Teacher.destroy({
      where: { id: req.params.id },
    });
    await deleteUser(teacher.user.id);
    return res.status(200).json({ message: 'El maestro se ha eliminado' });
  } catch (error) {
    return res.json({ message: error.message });
  }
}

export const findAllStudentsForTeacher = async (req, res) => {
  try {
    const students = await studentsForTeacher(req.params.id);
    return res.status(200).json({ students });
  } catch (error) {
    return res.json({ message: error.message });
  }
}