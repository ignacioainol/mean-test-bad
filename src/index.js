const cors = require('cors');
const express = require('express');
const app = express();
const path = require('path');

//const indexRoutes = require('./routes/index');
const tasksRoutes = require('./routes/tasks');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//routes
//se le antepone el prefijo api para luego desde url poder acceder a ella con tal prefijo
app.use('/api',tasksRoutes);

//static files
app.use(express.static(path.join(__dirname + 'dist/client')));


//start server
app.listen(app.get('port'), () => {
    console.log("server on port", app.get('port'));
})