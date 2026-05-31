import { sequelize, QueryTypes } from "../config/database.js";
import { Request, Response } from "../config/express.js";

let deleteUserPost = async (req: Request, res: Response) => {
  let { id } = req.params;
  try {
    let query = `DELETE FROM blogs WHERE id=:id`;
    let message = await sequelize.query(query, {
      replacements: { id },
      type: QueryTypes.DELETE,
    });
    res.json(message);
  } catch (error) {
    console.log(error);
  }
};

export {deleteUserPost}