import { Request, Response } from "../config/express.js";

import { seeUserPostsService } from "../services/seeUserPostService.js";

let seeUserPosts = async (req: Request, res: Response) => {
  try {
    let message = await seeUserPostsService();
    res.json(message);
  } catch (error) {
    console.log(error);
  }
};

export { seeUserPosts };
