import { Router } from 'express';
import { createteacher, deleteTeacher, findAllStudentsForTeacher, findAllTeachers, findOneTeacher, updateTeacher } from '../controllers/teacher.controller.js';
import { validateTeacher } from '../middlewares/exp.validator.js';

const teacherRoutes = Router();

teacherRoutes.get('/teacher', findAllTeachers);
teacherRoutes.get('/teacher/:id', findOneTeacher);
teacherRoutes.post('/teacher', validateTeacher, createteacher);
teacherRoutes.put('/teacher/:id', validateTeacher, updateTeacher);
teacherRoutes.delete('/teacher/:id', deleteTeacher);
teacherRoutes.get('/teacher/:id/students', findAllStudentsForTeacher);

export default teacherRoutes;