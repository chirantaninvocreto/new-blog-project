import { sequelize, QueryTypes } from "../config/database.js";
import { Request, Response } from "../config/express.js";

let createUserPost = async (req: Request, res: Response) => {
  let { title, content } = req.body;
  let author = (req as any).user.email;
  try {
    let query: string = `insert into blogs (author,title,content)
  values (:author,:title,:content)`;
    await sequelize.query(query, {
      replacements: { author, title, content },
      type: QueryTypes.INSERT,
    });
    res.json("post created");
  } catch (error) {}
};

export { createUserPost };