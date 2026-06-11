import { app, express } from "./config/express.js";
import { connectDb } from "./config/database.js";
import { createTable } from "./models/table.js";
import { createUserTable } from "./models/userTable.js";
import { router } from "./routes/users.js";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const cors = require("cors");
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connectDb();
createTable();
createUserTable();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../src/views")));
app.use(express.static(path.join(__dirname, "../dist")));

app.use(
  cors({
    origin: ["http://127.0.0.1:5501", "http://localhost:5501"],
    methods: ["GET", "POST", "PATCH"],
  }),
);

app.use("/posts", router);
