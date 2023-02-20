import { body } from 'express-validator';
import valRes from './exp_res.validator.js';

const User = [
  body("userObject.name_user", "Ingresa un nombre de usuario valido")
    .trim().notEmpty().isLength({ min: 4, max: 20}).escape(),
  body("userObject.age", "La edad del usuario no esta permitida").isNumeric().isInt(),
  body("userObject.email", "El correo no es correcto").trim().isEmail().escape(),
  body("userObject.password", "La contraseña debe contener por lo menos 8 caracteres, 1 mayusculas, sibolos y numeros")
    .trim().isStrongPassword({ minLength: 8, minNumbers: 1, minUppercase: 1, minSymbols: 1 }),
];

const student = [
  body("studentObject.grade_and_group", "El grupo excede los 2 caracteres permitidos")
    .trim().notEmpty().isLength({ min: 2, max: 2 }).escape(),
  body("studentObject.observation", "La obcervación tiene de 2 a 50 caracteres permitidos")
    .trim().notEmpty().isLength({ min: 2, max: 50 }).escape(),
  body("studentObject.subjects", "Las materias no se seleccionaron correctamente").isArray(),
  body("studentObject.teacherId", "El maestro no se selecciono correctamente").isNumeric().isInt(),
  valRes,
];

export const validateSubject = [
  body("subject", "La materia debe contener de 3 a 50 caracteres")
    .trim().notEmpty().isLength({ min: 3, max: 50 }).escape(),
  valRes,
]

const teacher = [
  body("teacherObject.salary", "El salario debe ser un entero").isNumeric().isInt(),
  body("teacherObject.specialty", "La especialidad debe contener de 2 a 50 caracteres")
    .trim().notEmpty().isLength({ min: 2, max: 50 }).escape(),
  valRes,
];

export const validateStudent = User.concat(student);

export const validateTeacher = User.concat(teacher);