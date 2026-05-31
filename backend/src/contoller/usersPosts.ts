import { sequelize, QueryTypes } from "../config/database.js";
import { Request, Response } from "../config/express.js";

let seeUserPosts = async (req: Request, res: Response) => {
  try {
    let query = `select * from blogs`;
    let message = await sequelize.query(query, {
      type: QueryTypes.SELECT,
    });
    res.json(message);
  } catch (error) {
    console.log(error);
  }
};

export { seeUserPosts };
