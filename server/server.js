const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app')


//Handling Uncaught Exeption
process.on('uncaughtException', err => {
    console.log('uncaught Exeption. Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
})


//Setting config environment
dotenv.config({path: './config.env'});


const DB = process.env.DATABASE;
const PORT = 5000 || process.env.PORT;

// Connecting to DB
mongoose.connect(DB, {
    // useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('DB connections successful')
});


// Listening to server

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  
const server = app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`)
})



//Handling if DB not connected
process.on('unhandledRejection', err => {
    console.log(err.name, err.message);
    console.log('Unhandled Rejection. Shutting down...');
    server.close(() => {
        process.exit(1)
    })
})

