import { sequelize, QueryTypes } from "../config/database.js";
import { Request, Response } from "../config/express.js";

let editUserPost = async (req: Request, res: Response) => {
  let { id } = req.params;
  let { title, content } = req.body;
  try {
    let query = `update blogs set title=:title,content=:content where id=:id`;
    let message = await sequelize.query(query, {
      replacements: { id, title, content },
      type: QueryTypes.UPDATE,
    });
    res.json(message);
  } catch (error) {
    console.log(error);
  }
};

export { editUserPost };
