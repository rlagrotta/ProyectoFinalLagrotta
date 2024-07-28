const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.json());

// Servir archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Función para obtener los clientes
const obtenerClientes = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('db/db_clientes.json', 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      try {
        const clientes = JSON.parse(data);
        resolve(clientes);
      } catch (error) {
        reject(error);
      }
    });
  });
};

// Ruta para obtener los clientes
app.get('/api/clientes', async (req, res) => {
  try {
    const clientes = await obtenerClientes();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los clientes' });
  }
});

// Ruta para agregar un nuevo deudor
app.post('/api/agregar-deudor', async (req, res) => {
  try {
    const clientes = await obtenerClientes();
    const { nombre, cedula, placa, numero_ticket, prestamo } = req.body;

    // Crear nuevo deudor
    let nuevoDeudor = {
      id: clientes.length + 1,
      nombre,
      cedula,
      vehiculos: [
        {
          placa,
          numero_ticket,
          prestamo
        }
      ]
    };

    // Verificar que todas las claves sean válidas
    let claves = Object.keys(nuevoDeudor);
    let deboAnadir = claves.every(clave => nuevoDeudor[clave] !== null && nuevoDeudor[clave] !== '');

    if (deboAnadir) {
      clientes.push(nuevoDeudor);

      const json = JSON.stringify(clientes, null, 2);

      fs.writeFile('db/db_clientes.json', json, 'utf8', err => {
        if (err) {
          return res.status(500).json({ error: 'Error al escribir el archivo' });
        }
        res.json({ message: 'Cliente agregado correctamente' });
      });
    } else {
      res.status(400).json({ error: 'Datos inválidos' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los clientes' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});