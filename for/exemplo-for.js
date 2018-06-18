let i = 1; 


while(i <= 10){
    console.log(i);
    i++;
}

console.log("-------------------------")
// como fazer um for exatamente equivalente a esse while:

for (let i = 1; i <= 10; i++){
    for(let j = 10; j>0; j--){
        console.log (i,j);
    }
}




// for of e for in




let lista = ["Alisson", "Thiago"," Danilo","Marcelo","Casemiro","Paulinho","Coutinho"];

// FOR IN faz com que a variavel interna assuma um INDICE da lista a cada execuçao

for(let item in lista){
    console.log(item);
}


console.log ("------------------------------------");

//FOR OF faz com que a variavel interna assuma um Valor da lista a cada execução

for(let item of lista){
    console.log(item);
}


// FOR IN tambem funciona para OBJETOS

let client = {
    nome: "Victor",
    idade: 28,
    vivo: true
}

console.log ("---------------");

//for(let atributo in client){
  //  console.log(atributo);
//}

for(let atributo in client){
console.log (`O atributo ${atributo} tem o valor ${client[atributo]}`);
}