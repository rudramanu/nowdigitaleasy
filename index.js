const express = require("express");
require("dotenv").config();

const { connection } = require("./configs/db");
const { userRouter } = require("./routes/user.route");

const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Basic endpoint working");
});

app.use("/user", userRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Established connection with the Database");
  } catch (error) {
    console.log("Unable to establish a connection with the database server");
  }
  console.log(`Server is running at port ${process.env.port}`);
});
