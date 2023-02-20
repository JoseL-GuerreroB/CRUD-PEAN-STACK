import sequelize from '../database.js';

const StudentSubject = sequelize.define('subjects_from_students', {}, {
  timestamps: false,
});

export default StudentSubject;