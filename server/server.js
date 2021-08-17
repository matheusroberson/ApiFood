const express = require("express");
const app = express();

app.use("/", require("./route/productsRoute"));

app.listen(3000);
