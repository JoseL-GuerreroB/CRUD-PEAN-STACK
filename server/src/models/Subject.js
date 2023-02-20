import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const Subject = sequelize.define('subjects', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  subject: {
    type: DataTypes.STRING(30)
  }
});

export default Subject;