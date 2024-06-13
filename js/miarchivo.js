// Objeto con clientes para probar el for y el while
let texto = {
  "clientes": [
    {
      "id": 1,
      "nombre": "Juan Pérez",
      "cedula": "123456789",
      "vehiculos": [
        {
          "placa": "ABC123",
          "numero_ticket": "TCKT001",
          "prestamo": "Préstamo de Auto"
        }
      ]
    },
    {
      "id": 2,
      "nombre": "María López",
      "cedula": "987654321",
      "vehiculos": [
        {
          "placa": "DEF456",
          "numero_ticket": "TCKT003",
          "prestamo": "Préstamo de Auto"
        }
      ]
    },
    {
      "id": 3,
      "nombre": "Carlos García",
      "cedula": "456123789",
      "vehiculos": [
        {
          "placa": "GHI789",
          "numero_ticket": "TCKT004",
          "prestamo": "Préstamo de Auto"
        }
      ]
    },
    {
      "id": 4,
      "nombre": "Roque Lagrotta",
      "cedula": "8783614",
      "vehiculos": [
        {
          "placa": "ROCK37PWR",
          "numero_ticket": "TCKT005",
          "prestamo": "Préstamo de Moto"
        }
      ]
    },
    {
      "id": 5,
      "nombre": "Giovanna Lagrotta",
      "cedula": "8783615",
      "vehiculos": [
        {
          "placa": "GIOGROTT",
          "numero_ticket": "TCKT005",
          "prestamo": "Préstamo de Auto"
        }
      ]
    },
    {
      "id": 6,
      "nombre": "Stefano Fouquet",
      "cedula": "456123721",
      "vehiculos": [
        {
          "placa": "STEFQT01",
          "numero_ticket": "TCKT006",
          "prestamo": "Préstamo de Auto"
        }
      ]
    },
    {
      "id": 7,
      "nombre": "Carlos Diaz",
      "cedula": "456123754",
      "vehiculos": [
        {
          "placa": "TH3B4TM4N",
          "numero_ticket": "TCKT007",
          "prestamo": "Préstamo de Auto"
        }
      ]
    }
  ]
};

//db vacia deshabilitada para pruebas de if/else
/*let texto = {
  "clientes": []
};*/


// función con for deshabilitada para habilitar while
/* function myFunction() {
  if (texto.clientes.length !== 0) {
    let contenedorTabla = document.getElementById('contenedorTabla');
    let html = `<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Id</th>
      <th scope="col">Nombre</th>
      <th scope="col">Cedula</th>
      <th scope="col">Placa</th>
      <th scope="col">Ticket</th>
      <th scope="col">Tipo</th>
    </tr>
  </thead>
  <tbody>`;

    for (let i = 0; i < texto.clientes.length; i++) {
      let cliente = texto.clientes[i];
      html += `
    <tr>
    <th scope="row">${[i + 1]}</th>
      <td><strong>Id :</strong> ${cliente.id}</td>
      <td><strong>Nombre :</strong> ${cliente.nombre}</td>
      <td><strong>Cedula:</strong> ${cliente.cedula}</td>
    `;

      for (let j = 0; j < cliente.vehiculos.length; j++) {
        let vehiculo = cliente.vehiculos[j];
        html += `
        <td><strong>Placa:</strong> ${vehiculo.placa}</td>
        <td><strong>Ticket:</strong> ${vehiculo.numero_ticket}</td>
        <td><strong>Prestamo:</strong> ${vehiculo.prestamo}</td>
        </tr>
        </br>
      `;
      }
    }
    contenedorTabla.innerHTML = html;
  } else {
    console.log("No hay debedores")
    alert("No hay debedores");
  }
} */

// función con While habilitada
function myFunction() {
  if (texto.clientes.length !== 0) {
    let contenedorTabla = document.getElementById('contenedorTabla');
    let i = 0;
    let html = `<table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Cedula</th>
          <th scope="col">Placa</th>
          <th scope="col">Ticket</th>
          <th scope="col">Tipo</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
      <tbody>`;

    while (i < texto.clientes.length) {
      let cliente = texto.clientes[i];
      html += `
        <tr class="animate__fadeInDown" style="transition-delay: 1s transition: all 1s; transition-delay: 1s;"">
          <th scope="row">${cliente.id}</th>
          <td>${cliente.nombre}</td>
          <td>${cliente.cedula}</td>
          <td>${cliente.vehiculos[0].placa}</td>
          <td>${cliente.vehiculos[0].numero_ticket}</td>
          <td>${cliente.vehiculos[0].prestamo}</td>
          <td><a href="#" disabled>Ver</a>/<a href="#" disabled>Editar</a></td>
        </tr>`;
      i++;
    }

    html += `</tbody></table>`;
    contenedorTabla.innerHTML = html;
  } else {
    console.log("No hay deudores");
    alert("No hay deudores");
  }
}

