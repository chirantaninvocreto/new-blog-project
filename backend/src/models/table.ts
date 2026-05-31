import { sequelize } from "../config/database.js";

async function createTable(): Promise<void> {
  const query: string = `
    CREATE TABLE IF NOT EXISTS blogs (
      id SERIAL PRIMARY KEY,
      author VARCHAR(100) NOT NULL,
      title VARCHAR(200) NOT NULL,
      content TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await sequelize.query(query);

    console.log("Table created successfully");
  } catch (error) {
    console.log("Error creating table:", error);
  }
}

export { createTable };

