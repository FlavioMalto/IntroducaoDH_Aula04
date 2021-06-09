// Exercício do PG realizado em grupo durante a aula 04 - 08/06/2021

function pode_subir(altura, acompanhada) {
    if(altura >= 140 && altura < 200 && acompanhada != null){
    return "Pode Subir";
} else if(altura < 140 && altura > 120 && acompanhada == "sim"){
    return "Pode Subir acompanhado";
}else{
    return "Não pode Subir";
}
}

console.log(pode_subir(170, "não"))
console.log(pode_subir(125, "sim"))
console.log(pode_subir(125, "não"))
console.log(pode_subir(110, "sim"))