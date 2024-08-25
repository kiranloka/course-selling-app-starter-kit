const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter);
app.use("/user", userRouter);

const MONGO_URL = process.env.MONGO_URL;
mongoose
  .connect("mongodb+srv://kirankumarloka:kiran09@cluster0.v6vvgjg.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "courses",
  })
  .then(() => {
    app.listen(3000, () => console.log("Server running on port 3000"));
  })
  .catch((e) => {
    console.error(e);
  });
