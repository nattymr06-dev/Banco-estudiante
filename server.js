const express = require('express');
const cors = require ('cors');
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware para procesar JSON
app.use(cors())
app.use(express.json());
app.get('/', (req, res) => {
res.send("Servidor Activo")
});
// Importamos rutas
const retiroRouter = require('./rutas/retiro');
app.use('/retirar', retiroRouter);
// Servidor corriendo
app.listen(PORT, () => {
console.log(`Servidor escuchando en el puerto ${PORT}`);
});