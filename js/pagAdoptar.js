//Adoptar


let botonAdoptar = document.getElementById("botonAdoptar");
const listado = document.getElementById("formularioSelector");


const elegirMascota = (mascotas) => {
mascotas.forEach((m) => {
  const option = document.createElement("option");
  option.value = m.id;
  option.innerText = m.nombre;

  listado.appendChild(option);
});
}


function mascotasArray () {
  fetch("/js/mascotas.json")
    .then((res) => res.json())
    .then((json) => {
      elegirMascota(json)
    })
    .catch((error) => console.log(error))
}
console.log(mascotas)
mascotasArray();


document
  .getElementById("botonAdoptar")
  .addEventListener("click", (mascotas) => {
    let formularioNombre = document.getElementById("formularioNombre").value;
    let formularioTelefono =
      document.getElementById("formularioTelefono").value;
    let formularioCorreo = document.getElementById("formularioCorreo").value;
    var sel = document.getElementById("formularioSelector");
    var text= sel.options[sel.selectedIndex].text;
    let formularioSelector = text;
    let formularioPorQue = document.getElementById("formularioPorQue").value;
    let formularioDondeYQuien = document.getElementById(
      "formularioDondeYQuien"
    ).value;
    let formularioCheck = document.getElementById("formularioCheck").value;

    Swal.fire({
      title: `Muchas gracias!`,
      text: `Tu solicitud para adoptar a ${formularioSelector} fue enviada.`,
      imageUrl: "../img/adoption.jpg",
      imageWidth: 400,
      imageHeight: 200,
    });

    localStorage.setItem("Nombre",formularioNombre);
    localStorage.setItem("formularioTelefono", formularioTelefono);
    localStorage.setItem("formularioCorreo", formularioCorreo);
    localStorage.setItem("formularioSelector", formularioSelector);
    localStorage.setItem("formularioPorQue", formularioPorQue);
    localStorage.setItem("formularioDondeYQuien", formularioDondeYQuien);
    localStorage.setItem("formularioCheck", formularioCheck);
  });
