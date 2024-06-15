const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3001;
const connectToDatabase = require("./database/connect");
const apiRouter = require("./routes/apiRouter");
connectToDatabase();
app.use(bodyParser.json(), apiRouter);
app.listen(PORT, () => console.log(`app start on port ${PORT}`));
