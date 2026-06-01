import { sequelize, QueryTypes } from "../config/database.js";

async function editUserPostService(title: string, content: string, id: number) {
  try {
    let query = `update blogs set title=:title,content=:content where id=:id`;
    let message = await sequelize.query(query, {
      replacements: { id, title, content },
      type: QueryTypes.UPDATE,
    });
    return message;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export { editUserPostService };
