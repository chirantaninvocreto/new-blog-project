import { admin } from "../auth/firebaseAdmin.js";
import { sequelize, QueryTypes } from "../config/database.js";
import { Request, Response } from "../config/express.js";

let handellogin = async (req: Request, res: Response) => {
  let authHeader = req.headers.authorization!;

  let token = authHeader.split(" ")[1];
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);

    let uuid: string = decodedToken.uid;
    let name: string | null = decodedToken.name ?? null;
    let email: any = decodedToken.email;
    let query: string = `insert into Users (uid,name,email)
  values (:uuid,:name,:email) ON CONFLICT (uid) DO NOTHING`;
    await sequelize.query(query, {
      replacements: { uuid, name, email },
      type: QueryTypes.INSERT,
    });
    res.json({ message: "Login successful", name, email });
  } catch (error) {}
};

export { handellogin };
