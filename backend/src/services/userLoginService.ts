import { sequelize, QueryTypes } from "../config/database.js";

async function userLoginService(
  uuid: string,
  name: string | null,
  email: string,
) {
  try {
    let query: string = `insert into Users (uid,name,email)
  values (:uuid,:name,:email) ON CONFLICT (uid) DO NOTHING`;
    await sequelize.query(query, {
      replacements: { uuid, name, email },
      type: QueryTypes.INSERT,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export { userLoginService };
