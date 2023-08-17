import { Alquiler } from "./Alquiler"
import { Genero } from "./Genero"

export class Pelicula {
    private nombre:string
    private director:string
    private duracion: number
    private anio: number
    private calificacion: number
    private genero: Genero
    private disponibilidad:Alquiler
    
    
    constructor(nombre:string, director:string, duracion: number, genero:Genero , anio:number, calificacion: number, disponibilidad:Alquiler){
        this.nombre = nombre
        this.director = director
        this.duracion = duracion
        this.anio = anio
        this.calificacion = calificacion
        this.genero = genero
        this.disponibilidad = disponibilidad
    }

    //Getters:

    public getNombre ( ): string{
        return this.nombre
    }

    public getDirector ( ): string{
        return this.director
    }

    public getDuracion ( ): number{
        return this.duracion
    }

    public getAnio ( ): number{
        return this.anio
    }

    public getCalificacion ( ): number{
        return this.calificacion
    }

    public getGenero ( ): Genero{
        return this.genero
    }

    public getDisponibilidad ( ): Alquiler{
        return this.disponibilidad
    }

    //Setters:

    private setNombre (nombre: string){
        this.nombre = nombre
    }

    private setDirector ( director:string ){
        this.director = director
    }

    private setDuracion (duracion: number){
        this.duracion = duracion
    }

    private setAnio (anio:number){
        this.anio = anio
    }

    private setCalificacion (calificacion: number ){
        this.calificacion = calificacion
    }

    private setGenero (genero: Genero){
        this.genero = genero
    }

    private setDisponibilidad (disponibilidad: Alquiler){
        this.disponibilidad = disponibilidad
    }

    //Metodos:

    public imprimir (){
        console.log("\nDATOS DE LA PELICULA: " 
        + "\n\nNombre: " + this.nombre 
        + "\nDirector: " + this.director
        + "\nGenero: " + this.genero.getGenero()
        + "\nDuracion: " + this.duracion
        + "\nAño: " + this.anio
        + "\nCalificacion: " + this.calificacion)
    }

    public esEpica (): boolean{
        if (this.duracion >= 180){
            return true
        }
        else{
            return false
        }
    }
    
    public calcularCalificacion (){
        if (this.calificacion >= 0 && this.calificacion <=2){
           return "Muy mala" 
        }
        else if (this.calificacion > 2 && this.calificacion <= 5){
            return "Mala"
        }

        else if (this.calificacion > 5 && this.calificacion <= 7){
            return "Regular"
        }

        else if (this.calificacion > 7 && this.calificacion <=8){
            return "Buena"
        }

        else if(this.calificacion > 8 && this.calificacion <= 10){
            return "Muy buena"
        }
        else{
            return "Calificacion invalida."
        }
    }
    
    public esSimilar(otraPelicula: Pelicula): boolean {
            if(this.genero.getGenero === otraPelicula.genero.getGenero && this.calificacion === otraPelicula.calificacion){
                return true
            }
            else{
                return false
            }
          }
    public alquilar(){
            if (this.disponibilidad.diponibilidad == true) {
              console.log("\nHas alquilado la película " , this.nombre , ", disfrútala.");
            } 
            else {
              console.log("\nLa película " , this.nombre ," no está disponible en este momento.")
            }
       }

    public Cartelera(otraPelicula:Pelicula){
        if (this.disponibilidad.diponibilidad == false && otraPelicula.disponibilidad.diponibilidad == false){
            console.log(this.nombre)
            console.log(otraPelicula.getNombre())
        }
        else if (this.disponibilidad.diponibilidad == true && otraPelicula.disponibilidad.diponibilidad == false){
            console.log(otraPelicula.getNombre())
        }
        else if (this.disponibilidad.diponibilidad == false && otraPelicula.disponibilidad.diponibilidad == true){
            console.log(this.nombre)
        }

        else{
            console.log("Lo hay peliculas disponibles.");
            
        }
    }

}
    
