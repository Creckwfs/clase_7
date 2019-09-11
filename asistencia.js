const asistencias = [true,false,true,false,true,false]
let asistio = 0
let noasistio = 0

for (let index = 0; index < asistencias.length; index++){
   
    if (asistencias[index] == false){
        noasistio++}
}
const promedio = (noasistio*100) /asistencias.length
console.log(promedio+ ("%"));