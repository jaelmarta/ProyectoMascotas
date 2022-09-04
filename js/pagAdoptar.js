//Adoptar



let botonAdoptar = document.getElementById("botonAdoptar");
const listado = document.getElementById("formularioSelector");
mascotas.forEach((m) => {
  const option = document.createElement("option");
  option.value = m.id;
  option.innerText = m.nombre;

  listado.appendChild(option);
});


document
  .getElementById("botonAdoptar")
  .addEventListener("click", (mascotas) => {
    Swal.fire({
      title: `Muchas gracias!`,
      text: `Tu solicitud para adoptar a ${mascotas.nombre} fue enviada.`,
      imageUrl: `${mascotas.img}`,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: `${mascotas.nombre}`,
    });

    let formularioNombre = document.getElementById("formularioNombre").value;
    let formularioTelefono =
      document.getElementById("formularioTelefono").value;
    let formularioCorreo = document.getElementById("formularioCorreo").value;
    let formularioSelector =
      document.getElementById("formularioSelector").value;
    let formularioPorQue = document.getElementById("formularioPorQue").value;
    let formularioDondeYQuien = document.getElementById(
      "formularioDondeYQuien"
    ).value;
    let formularioCheck = document.getElementById("formularioCheck").value;

    localStorage.setItem(
      "formularioNombre",
      formularioNombre,
      "formularioTelefono",
      formularioTelefono,
      "formularioCorreo",
      formularioCorreo,
      "formularioSelector",
      formularioSelector,
      "formularioPorQue",
      formularioPorQue,
      "formularioDondeYQuien", 
      formularioDondeYQuien,
      "formularioCheck", 
      formularioCheck
    );
    /*localStorage.setItem("formularioTelefono", formularioTelefono);
    localStorage.setItem("formularioCorreo", formularioCorreo);
    localStorage.setItem("formularioSelector", formularioSelector);
    localStorage.setItem("formularioPorQue", formularioPorQue);
    localStorage.setItem("formularioDondeYQuien", formularioDondeYQuien);
    localStorage.setItem("formularioCheck", formularioCheck);*/
  });
