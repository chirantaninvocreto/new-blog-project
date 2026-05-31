import { Request, Response, NextFunction } from "../config/express.js";
import { admin } from "../auth/firebaseAdmin.js";

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization!;

    const token = authHeader.split(" ")[1];

    const decodedToken = await admin.auth().verifyIdToken(token);

    (req as any).user = decodedToken;

    next();
  } catch (error) {
    res.json({
      message: "Unauthorized",
    });
  }
};

export { verifyToken };
