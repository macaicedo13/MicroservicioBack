const express = require ('express');
const morgan = require ('morgan');
const cors = require ('cors');
const path = require ('path');
const alumno = require ('./routes/alumno');

const app = express();

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// Conexión base de datos
const mongoose = require('mongoose');
const uri = 'mongodb+srv://mongo:7QY4RJX94xxfSfCT@microservice-7lfun.mongodb.net/alumnos?retryWrites=true&w=majority';

//'mongodb+srv://consultas:xAfBYW5Jph7PJfQu@microservice-7lfun.mongodb.net/alumnos?retryWrites=true&w=majority';
//'mongodb://mongo:27017/Microservicio';
const options = {useNewUrlParser: true, useCreateIndex: true};
mongoose.connect(uri, options).then(
  () => { console.log('Conectado a DB') },
  err => { console.log(err) }
);

app.use('/api', alumno);
// Rutas
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
  console.log('Example app listening on port'+ app.get('puerto'));
});