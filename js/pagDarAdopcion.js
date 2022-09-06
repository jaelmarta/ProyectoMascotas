//Dar en adopcion

let formularioDosNombre=document.getElementById("formularioDosNombre").value;
let formularioDosTelefono=document.getElementById("formularioDosTelefono").value;
let formularioDosCorreo=document.getElementById("formularioDosCorreo").value;
let formularioDosPorQue=document.getElementById("formularioDosPorQue").value;
let nombreMascota=document.getElementById("nombreMascota").value;
let vacunasMascota=document.getElementById("vacunasMascota").value;
let tipoMascota=document.getElementById("tipoMascota").value;
let edadMascota=document.getElementById("edadMascota").value;
let botonPublicar=document.getElementById("botonPublicar").value;

function crearPost() {
     mascotas.push(
      new Mascota(mascotas.length + 1, "../img/adoption.jpg", nombreMascota,  vacunasMascota, tipoMascota, edadMascota)
    );
localStorage.setItem("mascotasJson", JSON.stringify(mascotas));
  }

  function obtenerDatos(){
    edadMascota=document.getElementById("edadMascota").value;
    tipoMascota=document.getElementById("tipoMascota").value;
    tipoMascota=document.getElementById("tipoMascota").value;
    vacunasMascota=document.getElementById("vacunasMascota").value;
    nombreMascota=document.getElementById("nombreMascota").value;
  }
  
document.getElementById("botonPublicar").addEventListener("click", (json)=> {
    obtenerDatos();
    crearPost();
    Swal.fire({
      title: `Muchas gracias!`,
      text: `Tu solicitud para publicar a ${nombreMascota} fue enviada.`,
      imageUrl:"../img/adoption.jpg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: `${nombreMascota}`,
    })

    /*localStorage.setItem (
        "Nombre", formularioDosNombre,
        "Telefono", formularioDosTelefono,
        "Correo", formularioDosCorreo,
        "Por que da en adopcion", formularioDosPorQue,
        "Imagen Mascota", imagenMascota,
        "Nombre Mascota", nombreMascota,
        "Vacunas Mascota", vacunasMascota,
        "Tipo de Mascota", tipoMascota,
        "Edad Mascota", edadMascota,
        
    )*/
})