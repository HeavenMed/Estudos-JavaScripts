// formas de criar um array
array1 = ["banana" ,  "maça"]
const array2 = new Array("bananil", "arroz")
//acessar elementos de um array
array2[0] // retorna "bananil"
//podemos criar um array com um comprimento gigante, sem necessariamente preenche-lo
array3 = [] // array vazio
array3[1000] = "ban" // atribui a posição 1000 uma string, logo array3.length será 1001, mesmo com apenas 1 elemento
array1.push("arroz") // adiciona, no final do array, um elementy string "arroz"
delete array1[0] // deleta o primeiro elemento do array
"banana" in array1 // false, pois foi deletado antes, serve para conferir
data = [1,2,3,4,5,6,7,8,9,10];
let count = 0
const SomarQuadrados = (x) => { count += x**2 }
data.forEach(SomarQuadrados(x)) // vai aplicar foreach para cada elemento do array uma function
// ----> array.join() -> transforma um array em uma string, e concatena todos os elementos, o elemento dentro de join
// irá definir o elemento separador dos elementos, exemplo:
var conc = array1.join("-")
console.log(conc) // retorna "banana-maça"
var conc2 = array2.join("") // retorna "bananamaça"
// se não for colocado nada dentro do join, será usado a vírgula para separar;
// -----> array.reverse() , irá reverter a ordem dos elementos do array
const array4 = [1,2,3,4]
let array4reversed = array4.reverse() // retorna [4,3,2,1]
// -----> array.sort() classifica o elemento em ordem alfabética e retorna, se houver elementos indefined eles irão ser colocados
// no final do array, é importante saber que ele irá ter dificuldade em ordenar strings em letra maíscula ou minúscula
// é necessário fazer uma função dentro do sort para isso
// ------>array.concat() concatena um array , não altera ele de modo nenhum
const stringarray = array4.concat() // retorna exatamente : "[1,2,3,4]"
// -----> array.slice(x,y) // recortar um pedaço do array  atenção! ele não altera o array main
const array5 = [1,2,3,4,5]
let corte = array5.slice(0,3) // retorna [1,2,3]
// ---> array.splice() ---> ele pode retirar elementos alterando o array principal, no caso, ele seleciona uma parte e exclui o resto
var b = [1,2,3,4,5,6,7,8,9]
// b.splice(4) -> ele seleciona [1,2,3,4] e tira o restante [5,6,7,8,9], retornando este.
// -----> array.push() -> adiciona elementos no final do array
// ----->array.unshift() ->adiciona elementos no começo do array
// ------> array.shift()---> exclui o primeiro elemento do array
