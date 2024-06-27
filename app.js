const express = require("express");

const bodyParser = require("body-parser");

const cors = require("./middllewares/cors");

const connectToDatabase = require("./database/connect");

const PORT = 3001;
const app = express();
const apiRouter = require("./routes/apiRouter");
connectToDatabase();
app.use(cors, bodyParser.json(), apiRouter);
app.listen(PORT, () => console.log(`app start on port 🤏 🤡 ${PORT}`));
