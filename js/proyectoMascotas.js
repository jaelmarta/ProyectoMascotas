/*
Proyecto Mascotas
*/

let mascotas = [];
const catalogoMascotas = new CatalogoMascotas(mascotas);


//Index


function llenarMascotasArray(){
  fetch("/js/mascotas.json")
    .then((res) => res.json())
    .then((json) => {
      var jsonLeer = JSON.stringify(json);
      if(localStorage.getItem("mascotasJson") == undefined || localStorage.getItem("mascotasJson") == 'undefined'){
      localStorage.setItem("mascotasJson", JSON.stringify(json));
    }
    else{
      jsonLeer = localStorage.getItem("mascotasJson");
    }

    JSON.parse(jsonLeer).forEach((m) => {
        mascotas.push(new Mascota(m.id, m.img, m.nombre, m.vacunas, m.tipo, m.edad));
      });
      mostrarMascotas(mascotas);
    });
}

function mostrarMascotas(mascotasMostrar) {
  const mascotasDisponibles = document.getElementById("mascotasEnAdopcion");
 
    while (mascotasDisponibles.firstChild) {
      mascotasDisponibles.removeChild(mascotasDisponibles.firstChild);
    }
  mascotasMostrar.forEach((m) => {
    var rowNodo = document.createElement("div");
    rowNodo.setAttribute("class", "row");
      var nodoCard = document.createElement("div");
      nodoCard.setAttribute("class", "card");
      rowNodo.appendChild(nodoCard);
      var rowcardNodo = document.createElement("div");
      rowcardNodo.setAttribute("class", "row");
      nodoCard.appendChild(rowcardNodo);
      var imgNodo = document.createElement("img");
      imgNodo.setAttribute("src", m.img);
      imgNodo.setAttribute("class", " col-sm-6 col-md-6 col-lg-3");
      imgNodo.setAttribute("alt", m.nombre);
      rowcardNodo.appendChild(imgNodo);
      var cardBodyNodo = document.createElement("div");
      cardBodyNodo.setAttribute("class", "col-sm-6 col-md-6 col-lg-6");
      rowcardNodo.appendChild(cardBodyNodo);
      var h5Nodo = document.createElement("h5");
      h5Nodo.setAttribute("class", "card-title");
      h5Nodo.innerHTML = m.nombre;
      cardBodyNodo.appendChild(h5Nodo);
      var pNodo = document.createElement("p");
      pNodo.setAttribute("class", "card-text");
      pNodo.innerHTML = 	`Soy un ${m.tipo} </br>tengo ${m.edad} año(s) </br>y tengo ${m.vacunas} vacunas`;
      cardBodyNodo.appendChild(pNodo);

      /*
        <div class="card-body">
          <h5 class="card-title">${m.nombre}</h5>
          <p class="card-text">Soy un ${m.tipo} </p>
          <p class="card-text">tengo ${m.edad} años</p>
          <p class="card-text">y tengo ${m.vacunas} vacunas</p>
          <div class=adoptarMascota>
          <button type="button" class="btn btn-primary" onclick="adoptarMascotaForm">Adoptar!</button>
          </div>
        </div>*/
  mascotasDisponibles.appendChild(rowNodo);
  });

}
llenarMascotasArray();
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
mascotaABuscar.addEventListener("click", () => {
  const buscadorMascotas = document.getElementById("buscador").value;
  filtrarMascotas(buscadorMascotas);
});

const buscadorMascotas = document.getElementById("buscador");
buscadorMascotas.addEventListener("keydown", () => {
  filtrarMascotas(buscadorMascotas.value);
});
function filtrarMascotas(buscadorMascotas) {
  const filtradas = mascotas.filter(
    (m) => m.nombre.toUpperCase().indexOf(buscadorMascotas.toUpperCase()) !== -1
  );
  mostrarMascotas(filtradas);
}

