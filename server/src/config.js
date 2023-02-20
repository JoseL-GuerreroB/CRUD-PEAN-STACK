import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT;
export const DBNAME = process.env.DBNAME;
export const USERDB = process.env.USERDB;
export const PASSWORDDB = process.env.PASSWORDDB;
export const HOST = process.env.HOST;
export const DIALECT = process.env.DIALECT;
export const ORIGIN1 = process.env.ORIGIN1;