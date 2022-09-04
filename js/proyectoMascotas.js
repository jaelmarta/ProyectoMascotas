/*
Proyecto Mascotas
*/

/*const mascotas = [
  new Mascota(1, "./img/Emma.png", "Emma", 5, "Gato", "1"),
  new Mascota(2, "./img/Godzilla.jpeg", "Godzilla", 2, "Gato", "1"),
  new Mascota(3, "./img/Luz.jpg", "Luz", 6, "Perro", "11"),
  new Mascota(4, "./img/Riff.jpeg", "Riff", 12, "Perro", "9"),
  new Mascota(5, "./img/Bugs.jpg", "Bugs", 6, "Conejo", "4"),
  new Mascota(6, "./img/Lucas.jpg", "Lucas", 8, "Pato", "2"),
  new Mascota(7, "./img/Rolo.jpg", "Rolo", 3, "Caballo", "5"),
];
const catalogoMascotas = new CatalogoMascotas(mascotas);*/
//console.log("CATALOGO MASCOTAS", catalogoMascotas.mascotas);


//Index

const catalogoMascotas = new CatalogoMascotas(mascotas)




function mascotas () {
fetch("/js/mascotas.json")
    .then((res) => res.json())
    .then((json) => console.log(json));

}
mascotas()

async function cargarMascotas() {
     let res = await fetch("/js/mascotas.json")
     let json = await res.json();
     mostrarMascotas(json);
 }
 
 function mostrarMascotas(mascotas) {
   const div = document.getElementById("mascotasEnAdopcion");
   div.innerHTML = "";
   mascotas.forEach((mascotas) => {
    mostrarMascotas(mascotas);
   })
 }
 
 function mostrarMascotas(mascotas) {
  const mascotasDisponibles = document.getElementById("mascotasEnAdopcion");
   const nodoMascotas = document.createElement("div")
   nodoMascotas.setAttribute("style", "border:1px solid blue;border-radius:20px;margin:10px;padding:2%")
   nodoMascotas.innerHTML = `<div class="cad col-sm-12 col-md-6 col-lg-3 m-2" style="width: 15rem;">
                              <div class="col">
                                <div class="card">
                                <img src=${mascotas.img} class="card-img-top" alt="${mascotas.nombre}">
                                  <div class="card-body">
                                    <h5 class="card-title">${mascotas.nombre}</h5>
                                    <p class="card-text">Soy un ${mascotas.tipo} </p>
                                    <p class="card-text">tengo ${mascotas.edad} años</p>
                                    <p class="card-text">y tengo ${mascotas.vacunas} vacunas</p>
                                    <div class=adoptarMascota>
                                    <button type="button" class="btn btn-primary" onclick="adoptarMascotaForm">Adoptar!</button>
                                    </div>
                                  </div>
                                </div>
                                </div>
                              </div>`
   div.appendChild(nodoMascotas);
 
   programarVerMascotaDetallada(mascotas.id)
 
 
 }

/*const listarMascotas = (mascotas) => {
  const mascotasDisponibles = document.getElementById("mascotasEnAdopcion");
  mascotas.innerHTML="";
  mascotas.forEach((mascotas) => {
    mascotas.innerHTML = `<div class="cad col-sm-12 col-md-6 col-lg-3 m-2" style="width: 15rem;">
                                      <div class="col">
                                        <div class="card">
                                        <img src=${mascotas.img} class="card-img-top" alt="${mascotas.nombre}">
                                          <div class="card-body">
                                            <h5 class="card-title">${mascotas.nombre}</h5>
                                            <p class="card-text">Soy un ${mascotas.tipo} </p>
                                            <p class="card-text">tengo ${mascotas.edad} años</p>
                                            <p class="card-text">y tengo ${mascotas.vacunas} vacunas</p>
                                            <div class=adoptarMascota>
                                            <button type="button" class="btn btn-primary" onclick="adoptarMascotaForm">Adoptar!</button>
                                            </div>
                                          </div>
                                        </div>
                                       </div>
                                      </div>`;
  });
}
listarMascotas(mascotas);*/









//Todas las secciones
  const mascotaABuscar = document.getElementById("searchButton");
  mascotaABuscar.addEventListener("click", ()=> {
    const buscadorMascotas=document.getElementById("buscador").value;
    filtrarMascotas(buscadorMascotas);

  });
 
  const buscadorMascotas= document.getElementById("buscador");
  buscadorMascotas.addEventListener("keydown", ()=> {
    filtrarMascotas(buscadorMascotas.value);
  })
function filtrarMascotas(buscadorMascotas) {
const filtradas = mascotas.filter((mascotas)=>mascotas.nombre.toUpperCase().indexOf(buscadorMascotas)!==-1);
  listarMascotas(filtradas)
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


