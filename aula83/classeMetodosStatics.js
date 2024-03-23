class ControleRemoto{

constructor(tv){
this.tv = tv;
this.volume=0;

}

aumentarVolume(){

    this.volume+=2;
}

diminuirVolume(){

    this.volume-=2
}

//Metodo Estatico (não pode ser visto pela instancia somente na classe)
static trocarPilha(controle){
    console.log(`Trocar pilha do controle: ${controle}`)
}

}


const controle1 = new ControleRemoto('LG');
for(let i =0; i<4;i++){
    controle1.aumentarVolume();
}
console.log(controle1.volume)

//chamando o metodo pela classe
console.log(ControleRemoto.trocarPilha('LG'));