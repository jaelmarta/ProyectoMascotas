/*
Proyecto Mascotas
*/

const mascotas = [
  { id: 1, nombre: "Emma", vacunas: 5, tipo: "Gato", edad: "1" },
  { id: 3, nombre: "Godzilla", vacunas: 2, tipo: "Gato", edad: "1" },
  { id: 4, nombre: "Luz", vacunas: 6, tipo: "Perro", edad: "11" },
  { id: 5, nombre: "Riff", vacunas: 50, tipo: "Perro", edad: "9" },
  { id: 6, nombre: "Bugs", vacunas: 40, tipo: "Conejo", edad: "4" },
  { id: 7, nombre: "Lucas", vacunas: 45, tipo: "Pato", edad: "2" },
  { id: 8, nombre: "Rolo", vacunas: 3, tipo: "Caballo", edad: "5" },
];

const catalogoMascotas = new CatalogoMascotas(mascotas);
console.log("CATALOGO MASCOTAS", catalogoMascotas.mascotas);
mostrarMenu();

quieroAdoptar();
mostrarTipos();

function quieroAdoptar() {
  const boton = document.createElement("button");
  boton.innerText = "QUIERO ADOPTAR";
  boton.addEventListener("click", () => {
    tiposDeMascotas();
  });
  const adminNode = document.getElementById("adoptarAnimal")
  adminNode.appendChild(boton);
}

function tiposDeMascotas() {
  const boton = document.createElement("button");
  boton.innerText = "PERRO";
  boton.innerText = "GATO";
  boton.innerText = "CONEJO";
  boton.innerText = "PATO";
  boton.innerText = "CABALLO";
  const adminNode = document.getElementById("animalesEnAdopcion")
  adminNode.appendChild(boton);
}

function mostrarMenu() {
  let opcion = "";
  while (opcion !== "Z") {
    opcion = prompt(`Seleccione una opcion: 
                        A. Ingresar tipo de mascota
                        B. Listar tipos de mascotas
                        C. Borrar un tipo de mascota
                        D. Buscar una mascota
                        E. Actualizar una mascota
                        F. Ordenar mascotas
                        Z. FIN`);

    switch (opcion) {
      case "A":
        ingresarMascotas();
        break;
      case "B":
        listarMascotas();
        break;
      case "C":
        borrarMascotas();
        break;
      case "D":
        buscarMascotas();
        break;
      case "E":
        actualizarMascotas();
        break;
      case "F":
        ordenarMascotas();
        break;
      case "Z":
        alert("Vuelvas Prontos");
        break;
      default:
        alert("opcion inválida");
        break;
    }
  }
}

function ingresarMascotas() {
  let img = prompt("Ingrese una imagen de la mascota");
  let nombre = prompt("Ingrese una nueva mascota");
  let vacunas = Number(prompt("Cuantas vacunas tiene?"));
  let tipo = prompt("Tipo de mascota");
  let edad = prompt("Edad de la mascota");

  let mascota = new Mascota(
    catalogoMascotas.darCantidad() + 1,
    img,
    nombre,
    vacunas,
    tipo,
    edad
  );
  catalogoMascotas.agregarMascota(mascota);

  console.log("CATALOGO MASCOTAS", catalogoMascotas);
}

function listarMascotas() {
  const nodoPrincipal = document.getElementById("mainContent");
  nodoPrincipal.innerHTML = "";
  nodoPrincipal.setAttribute("style", "display:flex");
  catalogoMascotas.mascotas.forEach((mascotas) => {
    const divMascotas = document.createElement("div");
    divMascotas.innerHTML = `<div><img src=${mascotas.img} width="250px"></div>
                              <hr>                      
                              <h3>${mascotas.nombre}</h3>
                              <div class='vacunasMascotas'> (${mascotas.vacunas})</div>
                              <div class='tipoDeMascota'> (${mascotas.tipo})</div>
                              <div>${mascotas.edad}</div>`;

    nodoPrincipal.appendChild(divMascotas);
  });
}

function borrarMascotas() {
  let borrarMascota = prompt("Ingrese la mascota que desea borrar");
  let indice = tipoDeMascota.indexOf(borrarMascota);
  if (indice === -1) {
    // NO ENCONTRÓ EL DATO
    alert("MASCOTA NO EXISTE");
  } else {
    tipoDeMascota.splice(indice, 1);
    alert("MASCOTA BORRADA CON ÉXITO");
  }
}

function buscarMascotas() {
  let tipoABuscar = prompt("Ingrese el tipo de mascota que quiere buscar");
  catalogoMascotas.buscar(tipoABuscar);
}
function actualizarMascotas() {
  let tipoABuscar = prompt("Ingrese el nombre que quiere buscar");
  let nombre = prompt("Ingrese un nombre");
  let edad = Number(prompt("Ingrese una edad"));
  let arma = prompt("Ingrese un arma");

  catalogoMascotas.modificarMascotas(tipoABuscar, vacunas, tipo, edad);
}

function ordenarMascotas() {
  catalogoMascotas.ordenarMascotas();
}
