import { Request, Response } from "../config/express.js";
import { serviceCreateUserPost } from "../services/createUserService.js";

let createUserPost = async (req: Request, res: Response) => {
  try {
    let { title, content } = req.body;
    let author = (req as any).user.email;

    let result = await serviceCreateUserPost(author, title, content);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export { createUserPost };
