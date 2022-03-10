const express = require("express");
const app = express();
const cors = require("cors");
import messageRoutes from './routes/messageRoutes'
import userRoutes from './routes/userRoutes'
import reviewRoutes from './routes/reviewRoutes'


//const bcrypt = require('bcrypt')

const port = process.env.NODE_ENV == "test" ? 5001 : 5000;
let pool;

if (process.env.NODE_ENV === "test") {
  pool = require("./test_db");
} else {
  pool = require("./db");
}

app.use(cors());
app.use(express.json());

//Routes

app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
app.use("/api/reviews", reviewRoutes);

app.listen(port, () => {
  console.log(`server has started on port ${port}`);
});

