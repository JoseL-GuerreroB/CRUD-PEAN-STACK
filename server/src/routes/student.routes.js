import { Router } from 'express';
import { createStudent, deleteStudent, findAllStudents, findOneStudent, updateStudent } from '../controllers/student.controller.js';
import { validateStudent } from '../middlewares/exp.validator.js';

const studentRoutes = Router();

studentRoutes.get('/student', findAllStudents);
studentRoutes.get('/student/:id', findOneStudent);
studentRoutes.post('/student', validateStudent, createStudent);
studentRoutes.put('/student/:id', validateStudent, updateStudent);
studentRoutes.delete('/student/:id', deleteStudent);

export default studentRoutes;