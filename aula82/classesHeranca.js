class DispositivoEletronico{

constructor(nome){
    this.nome = nome
    this.ligado=false
}


ligar(){

    if(this.ligado){
        console.log(this.ligado + 'já esta ligado' );
        return;
    }
    this.ligado=true;
}


desligar(){

    if(!this.ligado){
        console.log(this.ligado + 'já esta desligado' );
        return;
    }

    this.ligado=false;
}



}





//Cria uma classe filho de Dispositivo
class SmartPhone extends DispositivoEletronico{
    constructor(nome,valor){
        super(nome)
        this.valor = valor;
        
    }

    //Sobreescrita do metodo
    ligar(){

        if(this.ligado){
            console.log(this.ligado + 'já esta ligado no SmartPhone' );
            return;
        }
        this.ligado=true;
        console.log('ligado no SmartPhone' );
    }
    

}

const smart = new SmartPhone('Sangung',1200);
const tablet = new SmartPhone('LG',700);
console.log(smart);
console.log(tablet);

window.addEventListener('load',(event)=>{

    alert(event.type);
})