class CatalogoMascotas {
    constructor(mascotas) {
        this.mascotas = mascotas;
    }

    /*agregarMascota(mascotas) {
        this.mascotas.push(mascotas);
    }*/

    darCantidad() {
        return this.mascotas.length;
    }

    listarMascotas() {
        this.mascotas.forEach((mascotas) => {
            console.log("LISTADO", mascotas);
        })
    }
    buscar(tipoABuscar) {
        let esta = this.mascotas.some((mascotas) =>
            mascotas.tipo.includes(tipoABuscar)
        )

        if (esta) {
            alert("LO ENCONTRE")

            let filtrado = this.mascotass.filter((mascotas) =>
                    mascotas.nombre.includes(nombreABuscar)
            )

            console.table("ESTO ENCONTRÉ", filtrado);
        }
        else {
            alert("NO LO ENCONTRÉ")
        }


    }
    modificarMascotas(tipoABuscar, nombre, tipo, vacunas, edad)
    {
        let mascotasEncontradas = this.mascotass.find((mascotas) =>
            mascotas.tipo.includes(tipoABuscar)
        )
        if(mascotasEncontradas)
        {
            mascotasEncontradas.nombre=nombre;
            mascotasEncontradas.tipo=tipo;
            mascotasEncontradas.vacunas=vacunas;
            mascotasEncontradas.edad=edad;
            console.log("RESULTADO", this.mascotas);
        }
        else{
            alert("NO PUEDO MODIFICAR")
        }


    }
    ordenarMascotas()
    {
        this.mascotas.sort((mascota1, mascota2)=>
        {
            if(mascota1.nombre<mascota2.nombre)
            {
                return -1
            }
            return 1;
        
        })
        console.log("ORDENADO", this.mascotas)
    }

}