// Operador + e suas consequências //
let valor1 = "1";
let valor2= 1;
let valor1e2 = valor1 + valor2;
let tipode = typeof(valor1e2);
console.log(valor1 + valor2);                     /* O console retornará 11 */
console.log("o typeof da soma é", tipode);           /* e será uma string, ou seja, string + number = string */


function comparar(number1,number2){
    if (number1 > number2) {
        console.log("o primeiro é maior")
    }
    else{
        console.log("o segundo é maior")
    }
};
comparar(10,2);

/* o operador in funciona dessa forma:   */
// Ele verifica se no lado esquerdo há um nome do objeto do lado direito, exemplo //

var exemplo = {x:1 , y:2};
"x" in exemplo;          // True, o objeto exemplo tem uma propriedade chamada x //

// ---------------------------------------------------- verificar palíndromos ----------- //
let z
let p
let ultimoindex
let tamanho
let i
var arraynovo = []
z = "subi no onibus";
p = Array.from(z);
tamanho = p.length;
ultimoindex = tamanho - 1;
console.log(p);

for(let i = ultimoindex ; i >= 0; i--){
    var element = p[i]
    arraynovo.push(element)
}
console.log(arraynovo)

if ( z = arraynovo){
    console.log("blueblue")
}
else{
    console.log("vish o pai se fudeu")
}

// ---------------------------------------------------- desafio substituir números pares por 0 ----------- //

let filas = [2,3,67,14,9,80,100,20,4,5];
let filas2 = [];
let tamanhos = filas.length;
for (let j = 0 ; j<=tamanhos; j++){
    if (filas[j]%2 == 0){
        filas2.push(filas[j])
    }
    else{
        filas2.push["0"]
    }
};
console.log(filas2)

// ---------------------------------------------------- outro jeito para fazer ----------- //
let aprovados = []
function alunoaprovado(array , mediaf){
    for(k = 0 ; k < array.length ; k++){
        if(array[k] > mediaf){
            aprovados.push(array[k])
        }
    }
}
alunoaprovado([2,4,10,12,5,3,2,1,6,5,4] , 6)
console.log(aprovados)



function squareSum(numbers1){
    let soma = 0
    for( let i = 0 ; i < numbers1.length ; i++){ 
        soma += numbers1[i]**2}
    console.log(soma)

}

squareSum(2,4,5)



function squareSum2(numbers) {
    let sum = 0
    for( let i = 0; i < numbers.length; i++) {
        sum += numbers[i] **2
    }
    return sum
    console.log(sum)
}

squareSum2(2,4,5,6)



const cadastro = new Map()
cadastro.set('Luiz','Admin');
cadastro.set('Pao','SuperAdmin')

function getAdmins(map){
    for([key, value] of map){
        if (value === 'SuperAdmin'){
            console.log(key);
        }
    }
}

getAdmins(cadastro)





