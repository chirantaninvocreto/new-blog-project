import { sequelize, QueryTypes } from "../config/database.js";

async function seeUserPostsService() {
  try {
    let query = `select * from blogs`;
    let message = await sequelize.query(query, {
      type: QueryTypes.SELECT,
    });
    return message;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export { seeUserPostsService };
