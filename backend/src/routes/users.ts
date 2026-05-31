import { express } from "../config/express.js";
import { handellogin } from "../contoller/userLogin.js";
import { seeUserPosts } from "../contoller/usersPosts.js";
import { createUserPost } from "../contoller/userCreatePost.js";
import { editUserPost } from "../contoller/userEditPost.js";
import { deleteUserPost } from "../contoller/userDeletePost.js";
import { verifyToken } from "../middleware/middleware.js";

const router = express.Router();

router.post("/login", handellogin);

router
  .route("/")
  .get(verifyToken, seeUserPosts)
  .post(verifyToken, createUserPost);

router
  .route("/:id")
  .patch(verifyToken, editUserPost)
  .delete(verifyToken, deleteUserPost);

export { router };

