const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

app.use("/", require("./route/productsRoute"));

app.listen(3000);
