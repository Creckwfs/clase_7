const calificaciones = [10, 8, 9]
let sumacalificaciones = 0

for (let index = 0; index < calificaciones.length; index++){
    sumacalificaciones += calificaciones[index]
}
const promedio = sumacalificaciones /calificaciones.length
console.log(promedio);
if (promedio >= 8) {
    console.log("Tienes la beca")
}
else {
    console.log("No tienes la beca")
}