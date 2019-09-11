const examenes = [8, 5, 9, 4 ,4]
let examenesAprobados = 0
let examenesReprobados = 0
for (let index = 0; index < examenes.length; index++){
    if (examenes[index] < 6){
        examenesReprobados++}
}
console.log(examenesReprobados)
