import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

//Connect to Database
const mongoose = require('mongoose');
const uri = 'mongodb+srv://vekjs:p131471483@cluster0-yzzb4.mongodb.net/test?retryWrites=true&w=majority';
const options = {useNewUrlParser: true, useUnifiedTopology:true};


mongoose.connect(uri, options)
    .then(
        () => {console.log('Connect Database')},
        err => {console.log(err)}
    );

    
//Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Routes
app.use('/auth', require('./routes/auth'));
app.use('/users', require('./routes/user'));
app.use('/solicitud', require('./routes/solicitud'));
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
  console.log('Puerto: '+ app.get('puerto'));
});

