const express = require('express');
const router = express.Router();
// Simulamos saldo inicial
const saldoInicial = 1000;
// Función para procesar retiro
function procesarRetiro(nombre, correo, monto) {
if (monto <= saldoInicial) {
return { ok: true, mensaje: `Hola,bienvenido al sistema bancario de Natalia Morales ${nombre}, retiro aprobado`, saldo: saldoInicial -
monto };
} else {
return { ok: false, mensaje: `Hola, bienvenido al sistema bancario de Natalia Morales ${nombre}, no tienes suficiente saldo`, saldo:
saldoInicial };

}
}
// Ruta POST
router.post('/', (req, res) => {
const { nombre, correo, monto } = req.body;
const resultado = procesarRetiro(nombre, correo, monto);
res.json(resultado); // enviamos JSON limpio
});
module.exports = router;