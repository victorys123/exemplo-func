function sorteio(minimo=0, maximo=10){
    let aleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    return aleatorio;

Arrow Function

const sorteio = (minimo=0, maximo=10) =>  {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}


(numero) => numero * 3 + 2;