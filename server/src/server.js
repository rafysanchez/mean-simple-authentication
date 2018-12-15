const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// intiailizations
const app = express();
require('./database');

// settings
app.set('port', process.env.PORT || 4000);


// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// routes
app.use('/api', require('./routes'));
app.use('/api/tasks', require('./routes/tasks'));

// Starting the app
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
