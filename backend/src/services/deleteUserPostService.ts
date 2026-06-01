import { sequelize, QueryTypes } from "../config/database.js";

async function deleteUserPostService(id: number) {
  let query = `DELETE FROM blogs WHERE id=:id`;
  let message = await sequelize.query(query, {
    replacements: { id },
    type: QueryTypes.DELETE,
  });
  return message;
}

export { deleteUserPostService };
