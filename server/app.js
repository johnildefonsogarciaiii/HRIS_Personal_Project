const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');




const app = express();



// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());




// Routers
const userRouter = require('./routes/userRoutes')
const leaveRouter = require('./routes/leaveRoutes')



// Routes
app.use('/user', userRouter);
app.use('/user/leave', leaveRouter);




module.exports = app;

