//Dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//ROUTERS
const UserRoute = require('./routes/UserRoutes');
//TODO: import another router

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse application/json
app.use(bodyParser.json());

/*enable cross origin resource sharing to allow 
restricted resources to be accessed from another domain */
app.use(cors());


//ROUTE INITIALIZER
app.use('/users', UserRoute);
//TODO: Add another route initializer

//Handle GET to root route
app.get('/', (req, res) => {
    //TODO: add key value pair to display a message in the response
    res.send({ 'Route': 'Root', 'HTTP': 'GET' });
})

//Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});