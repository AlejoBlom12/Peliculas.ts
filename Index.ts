import { Genero } from "./Genero";
import { Pelicula } from "./Pelicula";

let pelicula1: Pelicula = new Pelicula("Sparta", "Studio G", 200,new Genero(11, "Accion"),1982,10)

let pelicula2: Pelicula = new Pelicula ("Terminator", "Studios H", 190,new Genero(11, "Accion"),1910, 10)



pelicula1.imprimir()


if  (pelicula1.esEpica() == true){
    console.log("La pelicula es epica.")
}
else{
    console.log("No es epica.");
}

if (pelicula1.getCalificacion() > 10){
    console.log("Calificacion invalida, califica del 1 al 10");
}
else if(pelicula1.getCalificacion() < 0){
    console.log("Calificacion invalida, califica del 1 al 10");}
else{


}






