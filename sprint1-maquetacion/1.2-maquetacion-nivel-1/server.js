const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos desde node_modules
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

// Servir archivos estáticos (CSS, JS, imágenes)
app.use(express.static(path.join(__dirname, 'public')));

// Servir archivos estáticos desde la carpeta 'assets' si están fuera de 'public'
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Ruta para la página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});