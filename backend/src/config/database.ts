import { Sequelize, QueryTypes } from "sequelize";

const sequelize = new Sequelize("typescript project", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
});

const connectDb = async () => {
  try {
    await sequelize.authenticate();

    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};

export { connectDb, sequelize ,QueryTypes };
