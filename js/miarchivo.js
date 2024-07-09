// Objeto con los usuarios y contraseñas que puede utilizar la aplicación
const usuarios = {
  "accesos": [
    {
      "id": 1,
      "usuario": "rocketpower",
      "contraseña": "Marsepa147",
      "nombre": "Roque"
    },
    {
      "id": 2,
      "usuario": "anabelilla",
      "contraseña": "Marsepa148",
      "nombre": "Anabel"
    }
  ]
}

// Objeto con Base de datos de clientes para tener datos que imprimir en el buscador
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

/* el login en la aplicacion es false por default, manda a leer al storage si el login es true, si lo es entonces
pageState = "inicioDeSesion";, luego crea una funcion del botón "IniciarButtonLogin" que vea si nombreUsuario-input.value está en usuarios.accesos
y en el caso que lo sea mandará a la pagina inicioDeSesion con el pageState = "inicioDeSesion";
 */

let loginStatus = localStorage.getItem("loginStatus"); // Aquí debe ser una cadena
let pageState;

if (loginStatus === "false" || loginStatus === null || loginStatus === "") {
  pageState = "Deslogueado";
} else {
  pageState = "inicioDeSesion";
}


//Inicializando elementos de la interface inicio de sesion
const inicioDeSesion = document.getElementById("containerInicioDeSesion");
const usuarioInput = document.getElementById("nombreUsuario-input");
const claveInput = document.getElementById("claveUsuario-input");
const iniciarBtn = document.getElementById("IniciarButtonLogin");

// Inicializando elementos de la interface en el Main
const buscadorBtn = document.getElementById("buscarNavButton");
const agregaDeudorBtn = document.getElementById("agregaDeudorButton");
const controlBtn = document.getElementById("controlButtonId");
const containerBuscador = document.getElementById("containerBuscadorPrincipal")
const containerNuevo = document.getElementById("containerNuevoCliente")
// Inicializando elementos de la interface en el formulario de Agregar Nuevo Deudor
const nombreInput = document.getElementById("nombre-nuevo-input");
const apellidoInput = document.getElementById("apellido-nuevo-input");
const cedulaInput = document.getElementById("cedula-nuevo-input");
const placaInput = document.getElementById("placa-nuevo-input");
const ticketInput = document.getElementById("ticket-nuevo-input");
const prestamoInput = document.getElementById("prestamo-nuevo-input");


function handlePages() {
  if (pageState === "Buscador") {
    buscadorBtn.classList.add("active");
    agregaDeudorBtn.classList.remove("active");
    controlBtn.classList.remove("active");
    containerBuscador.style.display = "block";
    containerNuevo.style.display = "none";
    inicioDeSesion.style.display = "none"
  } else if (pageState === "Nuevo") {
    buscadorBtn.classList.remove("active");
    agregaDeudorBtn.classList.add("active");
    controlBtn.classList.remove("active");
    containerBuscador.style.display = "none";
    containerNuevo.style.display = "block";
    inicioDeSesion.style.display = "none"
  } else if (pageState === "Control") {
    buscadorBtn.classList.remove("active");
    agregaDeudorBtn.classList.remove("active");
    controlBtn.classList.add("active");
    inicioDeSesion.style.display = "none"
    containerBuscador.style.display = "none";
    containerNuevo.style.display = "none";
  } else if (pageState === "inicioDeSesion") {
    buscadorBtn.classList.remove("active");
    agregaDeudorBtn.classList.remove("active");
    controlBtn.classList.remove("active");
    containerBuscador.style.display = "none";
    containerNuevo.style.display = "none";

  } else if (pageState === "Deslogueado") {
    buscadorBtn.classList.remove("active");
    agregaDeudorBtn.classList.remove("active");
    controlBtn.classList.remove("active");
    containerBuscador.style.display = "none";
    containerNuevo.style.display = "none";
    inicioDeSesion.style.display = "block"

  }
}


function handleLogin() {
  // Verifica si ambos campos de entrada están llenos
  if (usuarioInput.value.trim() && claveInput.value.trim()) {
    for (let i = 0; i < usuarios.accesos.length; i++) {
      // Verifica si el usuario y la contraseña coinciden
      if (usuarioInput.value === usuarios.accesos[i].usuario && claveInput.value === usuarios.accesos[i].contraseña) {
        console.log("login admitido");
        pageState = "Buscador";
        localStorage.setItem("loginStatus", "true");

        // Verifica si handlePages está definido
        if (typeof handlePages === "function") {
          handlePages("Buscar");
        } else {
          console.error("handlePages no está definido");
        }

        return pageState;
      }
    }
    console.log("login no admitido");
    pageState = "Deslogueado";
    localStorage.setItem("loginStatus", "false");
    return pageState;
  }
  // Si los campos no están llenos, el login no es admitido
  console.log("login no admitido");
  pageState = "Deslogueado";
  localStorage.setItem("loginStatus", "false");
  return pageState;
}


function handleForm() {
  const elementoSeleccionado = document.getElementById("inputGroupSelect01");
  const opcionSeleccionada = elementoSeleccionado.options[elementoSeleccionado.selectedIndex].value;
  const valorDeInput = document.getElementById("ValorDeInput").value;
  console.log("Escribiste:" + valorDeInput);
  console.log("tu seleccion es:" + opcionSeleccionada);

  // Entonces ahora hacer una busqueda dependiendo de que fue lo que seleccionaste
  handleSearch(opcionSeleccionada, valorDeInput);
  return opcionSeleccionada, valorDeInput; // return debe ser al final si quieres detener la ejecución aquí
}

function handleSearch(opcionSeleccionada, valorDeInput) {
  console.log(`Aquí empezaría la búsqueda con la opción: ${opcionSeleccionada} y el valor: ${valorDeInput} `);
  switch (opcionSeleccionada) {
    case "nombre":
      getSearch(valorDeInput);
      break;
    case "cedula":
      getSearch(valorDeInput);
      break;
    case "vehiculo":
      cgetSearch(valorDeInput);
      break;
    case "ticket":
      getSearch(valorDeInput);
      break;
    case "prestamo":
      getSearch(valorDeInput);
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

  // Variable para controlar si se encontró el nombre
  let nombreEncontrado = false;

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

  // Recorre el array de clientes
  texto.clientes.forEach(cliente => {
    if (
      cliente.nombre === valorDeInput ||
      cliente.apellido === valorDeInput ||
      cliente.cedula === valorDeInput ||
      cliente.vehiculos.some(vehiculo =>
        vehiculo.placa === valorDeInput ||
        vehiculo.numero_ticket === valorDeInput ||
        vehiculo.prestamo === valorDeInput
      )
    ) {
      nombreEncontrado = true;
      console.log(`lo encontró: ${JSON.stringify(cliente)}`);

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
          <td><a href="#" onClick="controlFunc()"; disabled>Ver</a>/<a href="#" onClick="controlFunc()"; disabled>Editar</a></td>
        </tr>`;
      });
    }
  });

  html += `</tbody></table>`;

  // Inserta el HTML en el contenedor de la tabla
  tabla.innerHTML = html;

  // Si el nombre no fue encontrado
  if (!nombreEncontrado) {
    console.log("no lo encontró");
  }
}


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


  //nombreInput,apellidoInput,cedulaInput,placaInput,ticketInput,prestamoInput, AgregarButtonFormBtn;
  // Crear nuevo deudor
  let nuevoDeudor = {
    id: texto.clientes.length + 1,
    nombre: nombreInput.value,
    cedula: cedulaInput.value,
    vehiculos: [
      {
        placa: placaInput.value,
        numero_ticket: ticketInput.value,
        prestamo: prestamoInput.value
      }
    ]
  };


  // recorrer objeto
  let claves = Object.keys(nuevoDeudor);
  let DeboAnadir = false; // Inicializar DeboAnadir como false

  for (let i = 0; i < claves.length; i++) {
    if (claves[i].trim() === "" || nuevoDeudor[claves[i]] === null) {
      console.log(nuevoDeudor[claves[i]]);
      DeboAnadir = false; // Asegurar que no se agregue si alguna clave no es válida
      break; // Salir del bucle si se encuentra una clave inválida
    } else {
      DeboAnadir = true; // Marcar DeboAnadir como true si todas las claves son válidas
    }
  }

  if (DeboAnadir) {
    texto.clientes.push(nuevoDeudor);
    console.log(texto.clientes[texto.clientes.length - 1])
    Swal.fire({
      position: "center",
      icon: "success",
      title: "El cliente ha sido grabado",
      showConfirmButton: false,
      timer: 1500
    });
  }
  // Agregar nuevo deudor al array si estos no tienen null o espacios vacios


  //alert("Deudor agregado exitosamente.");
}

// función que se dispara al hacer click en control
// Por ahora deshabilitemosla ya que aun no tenemos los conocimientos necesarios
function controlFunc() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Esta función no está habilitada por el momento, vuelva mas tarde!",

  });
}


// Acciones de botón
agregaDeudorBtn.addEventListener("click", function (event) {
  pageState = "Nuevo";
  //agregarDeudor(event);
  handlePages("Buscador")

});
//botón para buscar por categoría en el nav
buscadorBtn.addEventListener("click", () => {
  pageState = "Buscador";
  // buscar();
  handlePages()
});
// boton controles
controlBtn.addEventListener("click", () => {
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
AgregarButtonFormBtn.addEventListener("click", function (event) {
  agregarDeudor(event);
})

iniciarBtn.addEventListener("click", handleLogin);
handlePages(pageState);


addEventListener("load", (event) => {
  if(loginStatus === "true"){
    pageState = "Buscador"
    handlePages(pageState);
  } else{
    console.log(loginStatus)
    containerBuscador.style.display = "none";
  }
});