const express = require('express');  // importar funcionalidades do express
const cors = require('cors'); // Importar o cors
const routes = require('./routes');  // importar rotas do routes.js

const app = express();  // Armazenar a aplicação

app.use(cors());
app.use(express.json());  // Informar ao app que estamos utilizando json
app.use(routes);

app.listen(3333);  // Escolhedo a porta