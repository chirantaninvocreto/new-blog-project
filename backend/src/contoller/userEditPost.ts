import { Request, Response } from "../config/express.js";

import { editUserPostService } from "../services/editUserPostService.js";

let editUserPost = async (req: Request, res: Response) => {
  try {
    let id = Number(req.params.id);
    let { title, content } = req.body;
    let message = await editUserPostService(title, content, id);
    res.json(message);
  } catch (error) {
    console.log(error);
  }
};

export { editUserPost };
