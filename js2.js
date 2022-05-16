/* Treinando a função map */
var objeto1 = {
    value : 10,
};

var objeto2 = {
    value : 20,
};

function multiplicararray(array,thisArg) {    //perceba que estamos criando uma função que tem array como alvo e um thisArg
                                              // para mudar a referência do objeto, o this irá apontar para um um objeto
    array.map(function (item){                // diferente, sendo objeto1 e objeto2 antes declarados, e cada um com value dif

        console.log(item * this.value) } , thisArg)  // o this.value irá apontar para um objeto e seu valor, objetoX.value
}

multiplicararray([1,2,3,4] , objeto2);

//-------------------------------------------------------------------------------------------------------------------
const exemplo1 = {
    coleção : "menebarreto",
};

const exemplo2 = {
    coleção : "jaobarreto",
};

function filtrarnumerospares(array, thisArgg){

    array.filter(function (item){

        if (item%2 == 0){ console.log("o Número",item,"da coleção",this.coleção, "é par")}

    }, thisArgg)
}

filtrarnumerospares([2,4,9,10,20,19] , exemplo1)

filtrarnumerospares([3,6,9,10,21,19] , exemplo2)


//-------------------------------------------------------------------------------------------------------------------

function SomaArray( sequencia ){

    sequencia.reduce(function(anterior, atual){
        console.log(anterior + atual )         //nessa função, o reduce começa com um valor
    } , 0)
}

//-------------------------------------------------------------------------------------------------------------------

const listafoda = [
    { nome : "pao" , valor : 30},
    { nome : "leite" , valor : 15 },
    { nome : "zugar", valor: 10}
]

const saldodisponivel = 100;

function saldofinal(saldototal , listo ){

    listo.reduce(function comprar(prev, atuals){

        console.log(prev - atuals.valor)
        
    } , saldototal)
}

saldofinal(saldodisponivel , listafoda)

//-------------------------------------------Orientação a objetos------------------------------------------------------------------------
class Contabancaria {
    constructor(agencia,numero,tipo,saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
    }

    get Saldo(){
        return this._saldo;
    }
    
    set Saldo(valor){
        this._saldo = valor
    }

    sacar(valor){
        this._saldo = this._saldo - valor;
    }

}
