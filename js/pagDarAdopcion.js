//Dar en adopcion

function crearPost() {
    let formularioDosNombre=document.getElementById("formularioDosNombre").value;
    let formularioDosTelefono=document.getElementById("formularioDosTelefono").value;
    let formularioDosCorreo=document.getElementById("formularioDosCorreo").value;
    let formularioDosPorQue=document.getElementById("formularioDosPorQue").value;
    let imagenMascota=document.getElementById("imagenMascota").value;
    let nombreMascota=document.getElementById("nombreMascota").value;
    let vacunasMascota=document.getElementById("vacunasMascota").value;
    let tipoMascota=document.getElementById("tipoMascota").value;
    let edadMascota=document.getElementById("edadMascota").value;
    let botonPublicar=document.getElementById("botonPublicar").value;


    fetch("/js/mascotas.json", {
      method: 'POST',
      body: JSON.stringify({
        id: (mascotas.length)+1,
        imagenMascota: imagenMascota, 
        nombreMascota: nombreMascota, 
        vacunasMascota: vacunasMascota,
        tipoMascota: tipoMascota, 
        edadMascota: edadMascota,
        botonPublicar: botonPublicar,

      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => alert("Se creó la mascota "+json.nombreMascota))
      .catch((error)=>alert(error));

  }
  
document.getElementById("botonPublicar").addEventListener("click", (json)=> {
    Swal.fire({
      title: `Muchas gracias!`,
      text: `Tu solicitud para publicar a ${json.nombreMascota} fue enviada.`,
      imageUrl:`${json.imagenMascota}`,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: `${json.nombreMascota}`,
    })
})