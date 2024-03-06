//neste exemplo vamos usar uma classe mae e especializar com as  filhas

//Classe abstrata Mae
function Conta(agencia,conta,saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;

};

Conta.prototype.sacar = function(valor){

    if(this.saldo<valor) {
        console.log('Saldo Insuficiente');
        this.verSaldo();
        return;
    }else{
        this.saldo-=valor;
        this.verSaldo();
        return;
    }
};



Conta.prototype.depositar = function(valor){
    this.saldo+=valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia} - Saldo R$:${this.saldo.toFixed(2)}`);
};




//Criando especializacao de conta corrente
function ContaCorrente(agencia,conta,saldo,limite){
    Conta.call(this,agencia,conta,saldo);
    this.limite = limite;

}

//Criamos a filha Conta Corrente
ContaCorrente.prototype = Object.create(Conta.prototype); //linkamos o prototype
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if(valor>(this.saldo + this.limite)){

        console.log(`Saldo Insuficiente: ${this.saldo}`)
        return;
    }
    this.saldo -=valor;
    this.verSaldo();
}

const conta2 = new ContaCorrente('012','124512',400,100);
console.log(conta2.sacar(450));
