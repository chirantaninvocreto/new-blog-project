import { Request, Response } from "../config/express.js";

import { deleteUserPostService } from "../services/deleteUserPostService.js";

let deleteUserPost = async (req: Request, res: Response) => {
  try {
    let id = Number(req.params.id);

    await deleteUserPostService(id);
    res.json({
      message: "User post deleted successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export { deleteUserPost };
