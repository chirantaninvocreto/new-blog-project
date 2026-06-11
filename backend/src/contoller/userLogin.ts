import { admin } from "../auth/firebaseAdmin.js";
import { userLoginService } from "../services/userLoginService.js";
import { Request, Response } from "../config/express.js";

let handellogin = async (req: Request, res: Response) => {
  try {
    let authHeader = req.headers.authorization!;
    let token = authHeader.split(" ")[1];
    const decodedToken = await admin.auth().verifyIdToken(token);
    let uuid: string = decodedToken.uid;
    let name: string | null = decodedToken.name ?? null;
    let email: any = decodedToken.email;
    await userLoginService(uuid, name, email);
    res.json({ message: "Login successful", name, email });
  } catch (error) {
    console.log(error);
  }
};

export { handellogin };
