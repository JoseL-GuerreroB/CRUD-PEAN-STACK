import express from 'express';
import sequelize from './database.js';
import cors from 'cors';
import { ORIGIN1, PORT } from './config.js';

import studentRoutes from './routes/student.routes.js';
import teacherRoutes from './routes/teacher.routes.js';
import subjectRoutes from './routes/subject.routes.js';

import './models/User.js';
import './models/Student.js';
import './models/Teacher.js';
import './models/Subject.js';
import './models/student_subject.js';

const app = express();

const whiteList = [ORIGIN1];

app.use(cors({
  origin: function (origin, cb) {
    if (whiteList.includes(origin)) return cb(null, origin);
    return cb("Error de cors");
  },
  credentials: true
})
);

app.use(express.json());
app.use('/', studentRoutes);
app.use('/', teacherRoutes);
app.use('/', subjectRoutes);

async function main () {
  try {
    await sequelize.authenticate();
    console.log('La base de datos se conecto con exito.');
    await sequelize.sync({ alter: false })
    app.listen(PORT, () => console.log(`La consola esta corriendo en el puerto ${PORT}`));
  } catch (error) {
    console.error('Ocurrio un error:', error);
  }
}

main();