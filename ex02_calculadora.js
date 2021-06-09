// Aula 04 - 08/01/2021
// Exemplo de Calculadora

let somar = function(n1,n2){
    return n1+n2;
}
let subtrair = function(n1,n2){
    return n1-n2;
}
let multiplicar = function(n1,n2){
    return n1*n2;
}
let dividir = function(n1,n2){
    // verificar a variável n2 se n2 == 0
    if(n2==0){
        //executar if se n2 == 0
        return "impossível fazer a divisão por 0";
    }else{
        return n1/n2;
    }
}
console.log(dividir(10,2));
