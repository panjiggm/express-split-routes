const express = require("express");
const app = express();

app.use("/api/fruits", require("./routes/fruits"));

app.listen(4000, () => console.log("Running on port 4000"));
