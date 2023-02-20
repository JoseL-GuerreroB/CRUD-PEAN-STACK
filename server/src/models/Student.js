import { DataTypes } from 'sequelize';
import sequelize from '../database.js';
import StudentSubject from './student_subject.js';
import Subject from './Subject.js';
import Teacher from './Teacher.js';
import User from './User.js';

const Student = sequelize.define('students', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  grade_and_group: {
    type: DataTypes.STRING(10),
  },
  observation: {
    type: DataTypes.STRING(50),
    allowNull: true,
  }
}, {
  timestamps: false,
});

Student.belongsTo(User);
Student.belongsTo(Teacher, {
  onDelete: 'SET NULL',
});
Teacher.hasMany(Student);
Student.belongsToMany(Subject, { through: StudentSubject });
Subject.belongsToMany(Student, { through: StudentSubject });

export default Student;