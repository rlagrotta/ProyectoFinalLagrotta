// Definición del objeto 'tarea'
let tarea = {
  sinCompletar: [],
  Completadas: []
};

// Referencia al campo de entrada para añadir tareas
let inputAnadirField = document.getElementById('anadirInput');

// Función para añadir una nueva tarea a la lista 'sinCompletar'
function anadirFunc() {
  let inputAnadir = document.getElementById('anadirInput').value;

  // Verificar si el valor no está vacío
  if (inputAnadir.trim() !== '') {
    // Añadir el valor al array 'sinCompletar'
    tarea.sinCompletar.push(inputAnadir);

    // Construir la tabla en una cadena
    let tablaHTML = '<table><tr><th>#</th><th>Tarea</th><th>Opciones</th></tr>';
    
    tarea.sinCompletar.forEach((element, index) => {
      tablaHTML += `<tr>
        <th scope="row">${index + 1}</th>
        <td>${element}</td>
        <td><button type="button" class="btn btn-outline-secondary btn-block" onclick="agregarACompletadas(${index})">Completar</button>
        </td>
      </tr>`;
    });

    tablaHTML += '</table>';

    // Actualizar el contenido del elemento con ID 'contenedorTabla'
    document.getElementById('contenedorTabla').innerHTML = tablaHTML;

    // Imprimir el array en la consola
    console.log(tarea.sinCompletar);

    // Limpiar el input
    document.getElementById('anadirInput').value = '';
  } else {
    console.log('El input está vacío.');
  }
}

// Función para borrar el contenido del input
function borrarFunc() {
  inputAnadirField.value = "";
}

// Función para mover una tarea de 'sinCompletar' a 'Completadas'
function agregarACompletadas(index) {
  // Añadir la tarea completada al array 'Completadas'
  tarea.Completadas.push(tarea.sinCompletar[index]);
  console.log(tarea.Completadas.length + " actualizada lista de completadas");

  // Eliminar la tarea de 'sinCompletar'
  tarea.sinCompletar.splice(index, 1);

  // Reconstruir la tabla después de la eliminación
  let tablaHTML = '<table><tr><th>#</th><th>Tarea</th><th>Opciones</th></tr>';
  
  tarea.sinCompletar.forEach((element, i) => {
    tablaHTML += `<tr>
      <th scope="row">${i + 1}</th>
      <td>${element}</td>
      <td><button type="button" class="btn btn-outline-secondary btn-block" onclick="agregarACompletadas(${i})">Completar</button>
      </td>
    </tr>`;
  });

  tablaHTML += '</table>';

  // Actualizar el contenido del elemento con ID 'contenedorTabla'
  document.getElementById('contenedorTabla').innerHTML = tablaHTML;
}

// Función para mostrar las tareas completadas
// Función para mostrar las tareas completadas
function tareasCompletadas() {
  // Verificar si la variable 'tarea' y la propiedad 'Completadas' existen
  if (tarea && tarea.Completadas) {
    // Verificar si hay tareas completadas
    if (tarea.Completadas.length > 0) {
      let listaHTML = '<ul>';
      tarea.Completadas.forEach((element, index) => {
        listaHTML += `<li>${index + 1}. ${element}</li>`;
      });
      listaHTML += '</ul>';

      // Actualizar el contenido del modal
      document.getElementById('completedTasksList').innerHTML = listaHTML;

      // Mostrar el modal
      $('#completedTasksModal').modal('show');
    } else {
      let emptyMessage = "Cuando complete alguna tarea esta aparecerá aquí";
      document.getElementById('completedTasksList').innerHTML = `<p>${emptyMessage}</p>`;
      $('#completedTasksModal').modal('show');
    }
  } else {
    let errorMessage = "La variable 'tarea' o su propiedad 'Completadas' no existe";
    document.getElementById('completedTasksList').innerHTML = `<p>${errorMessage}</p>`;
    $('#completedTasksModal').modal('show');
  }
}

// Botones de cerrar
const modalCloseXButton = document.querySelector(".close")
modalCloseXButton.addEventListener("click", function (e) {
  $('#completedTasksModal').modal('hide');
});

const modalCloseXButton2= document.querySelector(".close2Btn");
modalCloseXButton2.addEventListener("click", function (e) {
  $('#completedTasksModal').modal('hide');
});
