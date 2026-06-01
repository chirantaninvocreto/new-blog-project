import { sequelize, QueryTypes } from "../config/database.js";

async function serviceCreateUserPost(
  author: string,
  title: string,
  content: string,
) {
  try {
    let query: string = `insert into blogs (author,title,content)
  values (:author,:title,:content)`;
    await sequelize.query(query, {
      replacements: { author, title, content },
      type: QueryTypes.INSERT,
    });
  } catch (error) {
    console.log(error);
  }
}

export { serviceCreateUserPost };
