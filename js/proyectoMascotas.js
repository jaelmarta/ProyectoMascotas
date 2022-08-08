/*
Proyecto Mascotas
*/

const mascotas = [
  { id: 1, img:"", nombre: "Emma", vacunas: 5, tipo: "Gato", edad: "1" },
  { id: 3, img:"", nombre: "Godzilla", vacunas: 2, tipo: "Gato", edad: "1" },
  { id: 4, img:"", nombre: "Luz", vacunas: 6, tipo: "Perro", edad: "11" },
  { id: 5, img:"", nombre: "Riff", vacunas: 50, tipo: "Perro", edad: "9" },
  { id: 6, img:"", nombre: "Bugs", vacunas: 40, tipo: "Conejo", edad: "4" },
  { id: 7, img:"", nombre: "Lucas", vacunas: 45, tipo: "Pato", edad: "2" },
  { id: 8, img:"", nombre: "Rolo", vacunas: 3, tipo: "Caballo", edad: "5" },
];

const catalogoMascotas = new CatalogoMascotas(mascotas);
console.log("CATALOGO MASCOTAS", catalogoMascotas.mascotas);

mostrarMenu();
const navMenu=["Quiero adoptar", "Quiero dar en adopcion", "Contacto"]


function mostrarMenu() {
  navMenu.forEach((navMenu)=>{
    menuNavegacion(navMenu)
  })
}
function menuNavegacion(navMenu) {
  const nodoMenu=document.getElementById("mainMenu");
  const botonMenu=document.createElement("button");
  botonMenu.innerHTML=navMenu
  boton.addEventListener("click", ()=>{
    if(opcion==="Quiero adoptar")
    {
      mostrarQuieroAdoptar();
    }
    else if(opcion==="Quiero dar en adopcion") 
    {
      mostrarQuieroDarEnAdopcion();
    }
    else if(opcion==="Contacto")
    {
    mostrarContacto();
    }
  })
  nodoMenu.appendChild(navMenu);
}

function mostrarQuieroAdoptar () {


}
function mostrarQuieroDarEnAdopcion()
{

}
function mostrarContacto () 
{

}
  /*{let opcion = "";
  while (opcion !== "Z") {
    const opcion = document.createElement("button");
    opcion.innerHTML = `<div>
                      Seleccione una opcion: 
                        A. Ingresar tipo de mascota
                        B. Listar tipos de mascotas
                        D. Buscar una mascota
                        F. Ordenar mascotas
                        </div>`;

    switch (opcion) {
      case "A":
        quieroDarEnAdopcion();
        break;
      case "B":
        listarMascotas();
        break;
      case "D":
        buscarMascotas();
        break;
      case "F":
        ordenarMascotas();
        break;
    }
  }
}*/
quieroAdoptar();
tiposDeMascotas();

function quieroAdoptar() {
  const boton = document.createElement("button");
  boton.innerText = "QUIERO ADOPTAR";
  boton.addEventListener("click", () => {
    tiposDeMascotas();
  });
  const adminNode = document.getElementById("adoptarAnimal");
  adminNode.appendChild(boton);
}

function tiposDeMascotas() {
  boton.innerText = "PERRO";
  boton.innerText = "GATO";
  boton.innerText = "CONEJO";
  boton.innerText = "PATO";
  boton.innerText = "CABALLO";
  const adminNode = document.getElementById("animalesEnAdopcion");
  adminNode.appendChild(boton);
}

function quieroDarEnAdopcion() 
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
  let tipoABuscar = document.getElementById("#buscador");
  catalogoMascotas.buscar(tipoABuscar);
}


function ordenarMascotas() {
  catalogoMascotas.ordenarMascotas();
}


cargarPreferencias();
programarBotones();

function cargarPreferencias()
{
    const parrafo = document.getElementById("miParrafo");
 
    const mode = localStorage.getItem("mode")
    if(mode) //mode !=== null, undefined, 0, false, ""
    {        
        cambiarModo(mode);
    }
}

 function programarBotones()
 {
      programarModo("dark");
      programarModo("ligth");
 }

 function programarModo(modo)
 {
    const boton = document.getElementById(`${modo}Mode`);
    boton.addEventListener("click", ()=>{
        cambiarModo(modo);
    })
    
 }

 function cambiarModo(modo)
 {
     if(modo==='dark')
     {
         document.body.setAttribute("style", "background-color:black;color:white");
     }
     else if(modo==='ligth')
     {
        document.body.setAttribute("style", "background-color:white;color:black");
     }
     localStorage.setItem("mode", modo);
 
 }
