const express = require("express");

const app = express();

// const cors = require('cors');

// app.use(cors({
//    origin: 'https://taskfour-frontend.onrender.com/signup',
// }));

userRoutes = require("./routes/user");

app.listen(3000);
