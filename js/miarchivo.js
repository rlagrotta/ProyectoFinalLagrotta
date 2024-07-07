// Objeto con clientes para tener datos que imprimir en el caso que se necesiten
const texto = {
  "clientes": [
    {
      "id": 1,
      "nombre": "Juan",
      "apellido": "Pérez",
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
      "nombre": "María",
      "apellido": "López",
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
      "nombre": "García",
      "apellido": "García",
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
      "nombre": "Roque",
      "apellido": "Lagrotta",
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
      "nombre": "Giovanna", 
      "apellido": "Lagrotta",
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
      "nombre": "Stefano",
      "apellido": "Fouquet",
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
      "nombre": "Carlos",
      "apellido": "Diaz",
      "cedula": "456123754",
      "vehiculos": [
        {
          "placa": "TH3B4TM4N",
          "numero_ticket": "TCKT007",
          "prestamo": "Préstamo de Auto"
        }
      ]
    },
    {
      "id": 8,
      "nombre": "María",
      "apellido": "López",
      "vehiculos": [
        {
          "placa": "TH3B4TM4N",
          "numero_ticket": "TCKT007",
          "prestamo": "Préstamo de Auto"
        }
      ]
    }
  ]
}

let pageState = "Buscador";
// Inicializando elementos de la interface en el Main
const buscadorBtn = document.getElementById("buscarNavButton");
const agregaDeudorBtn = document.getElementById("agregaDeudorButton");
const controlBtn = document.getElementById("controlButtonId");
const containerBuscador = document.getElementById("containerBuscadorPrincipal")
const containerNuevo = document.getElementById("containerNuevoCliente")
// Inicializando elementos de la interface en el formulario de Agregar Nuevo Deudor


function handlePages() {
  if (pageState === "Buscador") {
      buscadorBtn.classList.add("active");
      agregaDeudorBtn.classList.remove("active");
      controlBtn.classList.remove("active");
      containerBuscador.style.display = "block";
      containerNuevo.style.display = "none";
  } else if (pageState === "Nuevo") {
      buscadorBtn.classList.remove("active");
      agregaDeudorBtn.classList.add("active");
      controlBtn.classList.remove("active");
      containerBuscador.style.display = "none";
      containerNuevo.style.display = "block";
  } else if (pageState === "Control") {
      buscadorBtn.classList.remove("active");
      agregaDeudorBtn.classList.remove("active");
      controlBtn.classList.add("active");
      // Asegúrate de manejar el contenedor correspondiente para el estado "Control"
  }
}


function handleForm() {
  const elementoSeleccionado = document.getElementById("inputGroupSelect01");
  const opcionSeleccionada = elementoSeleccionado.options[elementoSeleccionado.selectedIndex].value;
  const valorDeInput = document.getElementById("ValorDeInput").value;
  console.log("Escribiste:" + valorDeInput);
  console.log("tu seleccion es:" + opcionSeleccionada);

  // Entonces ahora hacer una busqueda dependiendo de que fue lo que seleccionaste
  handleSearch(opcionSeleccionada, valorDeInput);

  // obj debe estar definido antes de su uso
  //let obj = {};

  //document.getElementById("contenedorTabla").innerHTML = JSON.stringify(obj);

  return opcionSeleccionada, valorDeInput; // return debe ser al final si quieres detener la ejecución aquí
}

function handleSearch(opcionSeleccionada, valorDeInput) {
  console.log(`Aquí empezaría la búsqueda con la opción: ${opcionSeleccionada} y el valor: ${valorDeInput} `);
  switch (opcionSeleccionada) {
    case "nombre":
      getSearch(valorDeInput);
   /*   const inputBusqueda = valorDeInput.toLowerCase(); // Convertir a minúsculas para la comparación
      // Encontrar el cliente que coincida con el nombre
      let clienteEncontrado = texto.clientes.find(cliente => cliente.nombre.toLowerCase() === inputBusqueda);
      // Mostrar los datos del cliente si fue encontrado
      if (clienteEncontrado) {

        console.log(`Se encontró cliente ${clienteEncontrado.nombre}`)
        obj = JSON.stringify(clienteEncontrado);
        console.log(obj)
        document.getElementById("contenedorTabla").innerHTML = JSON.stringify(clienteEncontrado);
      } else {
        document.getElementById('contenedorTabla').innerHTML = 'Cliente no encontrado';
      }*/
      break;
    case "cedula":
      console.log("Aquí empieza la búsqueda de cédula");
      break;
    case "vehiculo":
      console.log("Aquí empieza la búsqueda de vehículo");
      break;
    case "ticket":
      console.log("Aquí empieza la búsqueda de ticket");
      break;
    case "prestamo":
      console.log("Aquí empieza la búsqueda de préstamo");
      break;
    default:
      console.log("Opción no válida");
      break;
  }
}

function getSearch(valorDeInput) {
  let contenedorTabla = 'contenedorTabla'; // Asegúrate de definir correctamente el id
  let tabla = document.getElementById(contenedorTabla);
  if (!tabla) {
    console.log("El contenedor de la tabla no existe");
    return;
  }
  
  console.log("getSearch");
  
  let obj = {};

  // Variable para controlar si se encontró el nombre
  let nombreEncontrado = false;

  // Recorre el array de clientes
  texto.clientes.forEach(cliente => {
    if (cliente.nombre === valorDeInput) {
      nombreEncontrado = true;
      console.log(`yes contains: ${JSON.stringify(cliente)}`);
      
      let html = `<table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Cedula</th>
          <th scope="col">Placa</th>
          <th scope="col">Ticket</th>
          <th scope="col">Tipo</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
      <tbody>`;
      
      cliente.vehiculos.forEach((vehiculo, index) => {
        html += `
        <tr class="animate__fadeInDown" style="transition: all 1s; transition-delay: 1s;">
          <th scope="row">${cliente.id}</th>
          <td>${cliente.nombre}</td>
          <td>${cliente.apellido}</td>
          <td>${cliente.cedula || "N/A"}</td>
          <td>${vehiculo.placa}</td>
          <td>${vehiculo.numero_ticket}</td>
          <td>${vehiculo.prestamo}</td>
          <td><a href="#" disabled>Ver</a>/<a href="#" disabled>Editar</a></td>
        </tr>`;
      });
      
      html += `</tbody></table>`;
      
      // Inserta el HTML en el contenedor de la tabla
      tabla.innerHTML = html;
    }
  });

  // Si el nombre no fue encontrado
  if (!nombreEncontrado) {
    console.log("no contains");
  }
}
    
   /*for(let value of texto.clientes){
    console.log(JSON.stringify(value))
    let contenedorTabla = document.getElementById('contenedorTabla');
    contenedorTabla.innerHTML += JSON.stringify(value);
  }*/





// Aqui empieza la vaina

/*
let containerBuscador = document.getElementById("containerBuscadorPrincipal")
let containerNuevo = document.getElementById("containerNuevoCliente")
*/ 
/*
function buscar() {
  console.log("buscar")
  const categorias = [
    "nombre del cliente",
    "nombre del ticket del vehiculo",
    "cedula del cliente",
    "nombre del prestamo",
    "placa del vehiculo",
    "mostrar toda la información"
  ];

  let categoria = prompt("Elige una categoría:\n1. Nombre del cliente\n2. Nombre del ticket del vehiculo\n3. Cédula del cliente\n4. Nombre del préstamo\n5. Placa del vehiculo\n6. Mostrar toda la información");

  categoria = parseInt(categoria);
  if (categoria < 1 || categoria > 6 || isNaN(categoria)) {
    alert("Categoría no válida.");
    return;
  }

  if (categoria === 6) {
    mostrarTodaLaInformacion();
    return;
  }

  let informacion = prompt(`Introduce la información para buscar en "${categorias[categoria - 1]}":`);

  if (informacion === null || informacion.trim() === "") {
    alert("No se introdujo ninguna información.");
    return;
  }

  let resultados = buscarEnArray(categoria, informacion);

  if (resultados.length > 0) {
    alert(`Resultados encontrados:\n${resultados.join('\n')}`);
  } else {
    alert("No se encontraron resultados.");
  }
}*/

function buscarEnArray(categoria, informacion) {
  let resultados = [];
  texto.clientes.forEach(cliente => {
    switch (categoria) {
      case 1:
        if (cliente.nombre.toLowerCase() === informacion.toLowerCase()) {
          resultados.push(JSON.stringify(cliente, null, 2));
        }
        break;
      case 2:
        cliente.vehiculos.forEach(vehiculo => {
          if (vehiculo.numero_ticket.toLowerCase() === informacion.toLowerCase()) {
            resultados.push(JSON.stringify(vehiculo, null, 2));
          }
        });
        break;
      case 3:
        if (cliente.cedula === informacion) {
          resultados.push(JSON.stringify(cliente, null, 2));
        }
        break;
      case 4:
        cliente.vehiculos.forEach(vehiculo => {
          if (vehiculo.prestamo.toLowerCase() === informacion.toLowerCase()) {
            resultados.push(JSON.stringify(vehiculo, null, 2));
          }
        });
        break;
      case 5:
        cliente.vehiculos.forEach(vehiculo => {
          if (vehiculo.placa.toLowerCase() === informacion.toLowerCase()) {
            resultados.push(JSON.stringify(vehiculo, null, 2));
          }
        });
        break;
    }
  });
  return resultados;
}

function mostrarTodaLaInformacion() {
  let todaLaInformacion = texto.clientes.map(cliente => JSON.stringify(cliente, null, 2)).join('\n\n');
  alert(`Toda la información:\n${todaLaInformacion}`);
}

function agregarDeudor() {

  //Crear nuevo cliente moroso (nombre: input..)
  // enviar sitio web a agregar.html
  //
  let nombre = prompt("Introduce el nombre del cliente:");
  if (nombre === null || nombre.trim() === "") {
    alert("Nombre no válido.");
    return;
  }

  let cedula = prompt("Introduce la cédula del cliente:");
  if (cedula === null || cedula.trim() === "") {
    alert("Cédula no válida.");
    return;
  }

  let placa = prompt("Introduce la placa del vehiculo:");
  if (placa === null || placa.trim() === "") {
    alert("Placa no válida.");
    return;
  }

  let numero_ticket = prompt("Introduce el número del ticket del vehiculo:");
  if (numero_ticket === null || numero_ticket.trim() === "") {
    alert("Número del ticket no válido.");
    return;
  }

  let prestamo = prompt("Introduce el nombre del préstamo:");
  if (prestamo === null || prestamo.trim() === "") {
    alert("Nombre del préstamo no válido.");
    return;
  }

  // Crear nuevo deudor
  let nuevoDeudor = {
    id: texto.clientes.length + 1,
    nombre: nombre,
    cedula: cedula,
    vehiculos: [
      {
        placa: placa,
        numero_ticket: numero_ticket,
        prestamo: prestamo
      }
    ]
  };

  // Agregar nuevo deudor al array
  texto.clientes.push(nuevoDeudor);
  alert("Deudor agregado exitosamente.");

  // Obtener el último cliente agregado
  const ultimoCliente = texto.clientes[texto.clientes.length - 1];

  // Mostrar la información del último cliente en la consola
  console.log("ultima información agregada exitosamente");
  console.log("Nombre: " + ultimoCliente.nombre);
  console.log("Cedula: " + ultimoCliente.cedula);
  ultimoCliente.vehiculos.forEach((vehiculo, index) => {
    console.log(`Vehículo ${index + 1}`);
    console.log("Placa: " + vehiculo.placa);
    console.log("Numero de Ticket: " + vehiculo.numero_ticket);
    console.log("Prestamo: " + vehiculo.prestamo);


  });
}
// función que se dispara al hacer click en control
// Por ahora deshabilitemosla ya que aun no tenemos los conocimientos necesarios
function controlFunc() {
  alert("Esta función no esta habilitada por el momento, vuelva mas tarde");
}



// Esto muestra la lista en html pero esta deshabilitada al momento
function MostrarListaBuscada() {
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

// Acciones de botón
agregaDeudorBtn.addEventListener("click", function (event) {
  pageState = "Nuevo";
  agregarDeudor(event);
  handlePages("Buscador")

});
//botón para buscar por categoría en el nav
buscadorBtn.addEventListener("click", ()=>{
  pageState = "Buscador";
 // buscar();
  handlePages()
});
// boton controles
controlBtn.addEventListener("click", ()=>{
  pageState = "Control";
  controlFunc();

});

//botón para buscar por categoría
searchButtonForm = document.getElementById("buscarButtonForm");
searchButtonForm.addEventListener("click", function (event) {
  handleForm(event);
  handlePages("Buscar");
  // MostrarListaBuscada(event);

});




// aqui empieza nuevo.html

AgregarButtonFormBtn = document.getElementById("AgregarButtonForm")
AgregarButtonFormBtn.addEventListener("click", function(event){
  agregarDeudor(event);
} )

handlePages(pageState);