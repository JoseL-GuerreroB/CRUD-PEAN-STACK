import Sequelize from 'sequelize';
import { DBNAME, DIALECT, HOST, PASSWORDDB, USERDB } from './config.js';

const sequelize = new Sequelize(DBNAME, USERDB, PASSWORDDB, {
  host: HOST,
  dialect: DIALECT,
});

export default sequelize;