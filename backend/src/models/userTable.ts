import { sequelize, QueryTypes } from "../config/database.js";

async function createUserTable(): Promise<void> {
  const query: string = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    uid VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL
  )`;
  try {
    await sequelize.query(query, { type: QueryTypes.RAW });
  } catch (error: any) {
    console.log(error);
  }
}

export { createUserTable };
