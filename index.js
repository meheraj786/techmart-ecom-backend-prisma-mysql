require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const app = express();

(() => {
  try {
    const cors = require("cors");
    app.use(express.json());
    app.use(cors());
    app.use(routes);
    app.listen(process.env.PORT, () => console.log("Server Is Running"));
  } catch (error) {
    console.log("Something Went Wrong", error);
  }
})();
