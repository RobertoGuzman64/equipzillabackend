const dbconnect = require('./db/dbconnect');
const PORT = process.env.PORT || 5000;
const app = require('./server');

dbconnect();

app.listen(PORT, () => { console.log(`Servidor levantado en http://localhost:${PORT}`)})