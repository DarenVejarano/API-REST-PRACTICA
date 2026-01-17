const express = require('express');
const app = express();

const bonsaiRoutes = require('./routes/bonsai-routes');

app.use(express.json());
app.use('/api/bonsais', bonsaiRoutes);

app.listen(3000, () => {
    console.log('Servidor en http://localhost:3000');
});
