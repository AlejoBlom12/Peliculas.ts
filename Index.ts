import { Alquiler } from "./Alquiler";
import { Genero } from "./Genero";
import { Pelicula } from "./Pelicula";

let pelicula1: Pelicula = new Pelicula("Sparta", "Studio G", 200,new Genero(11, "Accion"),1982,10, new Alquiler(false))

let pelicula2: Pelicula = new Pelicula ("Terminator", "Studios H", 190,new Genero(11, "Accion"),1910, 10, new Alquiler(false))



console.log("================================================");
pelicula1.imprimir()
console.log("================================================");

if  (pelicula1.esEpica() == true){
    console.log("\nLa pelicula es epica.")
}
else{
    console.log("\nNo es epica.");
}

console.log("================================================");
console.log("\n\nLa clasificacion es: ")
console.log(pelicula1.calcularCalificacion())

console.log("================================================");
pelicula2.imprimir()

console.log("================================================");
if  (pelicula2.esEpica() == true){
    console.log("\nLa pelicula es epica.")
}
else{
    console.log("\nNo es epica.");
}

console.log("================================================");
console.log("\n\nLa clasificacion es: ")
console.log(pelicula2.calcularCalificacion())


console.log("================================================");

console.log("\n\nLas peliculas son similares: ")
console.log(pelicula1.esSimilar(pelicula2))

console.log("================================================");
pelicula1.alquilar()
pelicula2.alquilar()
console.log("================================================");

console.log("\nLa cartelera contien estas peliculas disponibles: ");

pelicula1.Cartelera(pelicula2)
