import { Router } from 'express';
import { createSubject, deleteSubject, findAllSubjects, findOneSubject, updateSubject } from '../controllers/subject.controller.js';
import { validateSubject } from '../middlewares/exp.validator.js';

const subjectRoutes = Router();

subjectRoutes.get('/subject', findAllSubjects);
subjectRoutes.get('/subject/:id', findOneSubject);
subjectRoutes.post('/subject', validateSubject, createSubject);
subjectRoutes.put('/subject/:id', validateSubject, updateSubject);
subjectRoutes.delete('/subject/:id', deleteSubject);

export default subjectRoutes;