import { Genero } from "./Genero"

export class Pelicula {
    private nombre:string
    private director:string
    private genero: Array <Genero>
    private duracion: number
    private anio: number
    private calificacion: number

    constructor(nombre:string, director:string,genero:Genero, duracion: number, anio:number, calificacion: number){
        this.nombre = nombre
        this.director = director
        this.genero = []
        this.duracion = duracion
        this.anio = anio
        this.calificacion = calificacion
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

    //Metodos:

    public imprimir (){
        console.log("\nDATOS DE LA PELICULA: " 
        + "\n\nNombre: " + this.nombre 
        + "\nDirector: " + this.director
        + "\nGenero: " + this.genero
        + "\nDuracion: " + this.duracion
        + "\nAño: " + this.anio
        + "\nCalificacion: " + this.calificacion)
    }

    private esPeliculaEpica ( ): boolean{
        if ( this.duracion >= 180){
        return true
        }
        else{
        return false
        }
    }

    private calcularValoracion ( ){
        if (this.calificacion >= 0 && this.calificacion <= 2){
            return "Muy mala"
        }

        else if (this.calificacion > 2 && this.calificacion <= 5){
            return "Mala"
        }

        else if (this.calificacion > 5 && this.calificacion <= 7){
            return "Regular"
        }

        else if (this.calificacion > 7 && this.calificacion <= 8){
            return "Buena"
        }

        else if (this.calificacion > 8 && this.calificacion <= 10){
            return "Excelente"
        }

        else{
            console.log("Valoracion invalida.")
        }

    
    }
    
    


}