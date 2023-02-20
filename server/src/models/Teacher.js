import { DataTypes } from "sequelize";
import sequelize from "../database.js";
import User from "./User.js";

const Teacher = sequelize.define('teachers', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  salary: {
    type: DataTypes.INTEGER,
  },
  specialty: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: false,
});

Teacher.belongsTo(User);

export default Teacher;