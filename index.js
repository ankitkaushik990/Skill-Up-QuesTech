const express = require("express");
require("dotenv").config();
const dbUtils = require("./utils/dbutils");
const authRouter = require("./routes/auth_route");
const editRouter = require("./routes/edit_route");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
dbUtils.initDB();

app.use("/api/auth", authRouter);
app.use("/api/editor", editRouter);

process.on("SIGINT", () => {
  dbUtils.disconnectDB();
  console.log("Closing server");
  process.exit();
});

process.on("exit", () => {
  console.log("Server closed");
});

app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
