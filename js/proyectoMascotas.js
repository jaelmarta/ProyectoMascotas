/*
Proyecto Mascotas
*/

let timerInterval
Swal.fire({
  title: 'Bienvenido!',
  html: 'Esto es una página de adopción de mascotas',
  timer: 2000,
  timerProgressBar: true,
  color:'#fe9393',
  background: '#fff',
  backdrop: `
    rgba(0,0,123,0.4)
  `,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
})


const mascotas = [
  { id: 1, img: "", nombre: "Emma", vacunas: 5, tipo: "Gato", edad: "1" },
  { id: 3, img: "", nombre: "Godzilla", vacunas: 2, tipo: "Gato", edad: "1" },
  { id: 4, img: "", nombre: "Luz", vacunas: 6, tipo: "Perro", edad: "11" },
  { id: 5, img: "", nombre: "Riff", vacunas: 50, tipo: "Perro", edad: "9" },
  { id: 6, img: "", nombre: "Bugs", vacunas: 40, tipo: "Conejo", edad: "4" },
  { id: 7, img: "", nombre: "Lucas", vacunas: 45, tipo: "Pato", edad: "2" },
  { id: 8, img: "", nombre: "Rolo", vacunas: 3, tipo: "Caballo", edad: "5" },
];

const catalogoMascotas = new CatalogoMascotas(mascotas);
console.log("CATALOGO MASCOTAS", catalogoMascotas.mascotas);

const navMenu = ["Quiero adoptar", "Quiero dar en adopcion", "Contacto"];
mostrarMenu();

function mostrarMenu() {
  navMenu.forEach((navMenu) => {
    menuNavegacion(navMenu);
  });
}

function menuNavegacion(navMenu) {
  const nodoMenu = document.getElementById("mainMenu");
  const botonMenu = document.createElement("button")
  botonMenu.classList.add("boton");
  botonMenu.innerHTML = navMenu;
  let functionName = "";
  if (navMenu === "Quiero adoptar") {
    functionName = mostrarQuieroAdoptar();
  } else if (navMenu === "Quiero dar en adopcion") {
    functionName = mostrarQuieroDarEnAdopcion();
  } else if (navMenu === "Contacto") {
    functionName = mostrarContacto();
  }

  botonMenu.addEventListener("click", mostrarQuieroAdoptar());
  botonMenu.addEventListener("click", mostrarQuieroDarEnAdopcion());
  botonMenu.addEventListener("click", mostrarContacto());
  nodoMenu.appendChild(botonMenu);
}

function mostrarQuieroAdoptar() {  }
function mostrarQuieroDarEnAdopcion() { }
function mostrarContacto() { }




/*
quieroAdoptar();
tiposDeMascotas();

/*function quieroAdoptar() {
  var boton = document.createElement("button");
  boton.innerText = "QUIERO ADOPTAR";
  boton.addEventListener("click", () => {
    tiposDeMascotas();
  });
  const adminNode = document.getElementById("adoptarAnimal");
  adminNode.appendChild(boton);
}

function tiposDeMascotas() {
  var boton = document.createElement("button");
  boton.innerText = "PERRO";
  boton.innerText = "GATO";
  boton.innerText = "CONEJO";
  boton.innerText = "PATO";
  boton.innerText = "CABALLO";
  const adminNode = document.getElementById("animalesEnAdopcion");
  adminNode.appendChild(boton);
}*/

//function quieroDarEnAdopcion() {}
//ACA IRIA FORMULARIO DE ADOPCION
/* {let img = prompt("Ingrese una imagen de la mascota");
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
}*/

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

function buscarMascotas() {
  let tipoABuscar = document.getElementById("buscador");
  catalogoMascotas.buscar(tipoABuscar);
}

function ordenarMascotas() {
  catalogoMascotas.ordenarMascotas();
}

modoLightDark();
botonesLightDark();

function modoLightDark() {
  const mode = localStorage.getItem("mode");

  mode && cambiarModo(mode);
}

function botonesLightDark() {
  programarModo("dark");
  programarModo("light");
}

function programarModo(modo) {
  const boton = document.getElementById(`${modo}Mode`);
  boton.addEventListener("click", () => {
    cambiarModo(modo);
  });
}

function cambiarModo(modo) {
  if (modo === "dark") {
    document.body.setAttribute("style", "background-color:black;color:white;");
  } else if (modo === "light") {
    document.body.setAttribute("style", "background-color:white;color:black");
  }
  localStorage.setItem("mode", modo);
}
