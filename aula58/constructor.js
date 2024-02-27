//funcões construtoras

function Pessoa(nome, sobrenome){
    const ID = 1; //atributo privato
    this.nome=nome;
    this.sobrenome =sobrenome;
    
    //metodo publico
    this.nomeCompleto = ()=>{
        return(`${this.nome} ${this.sobrenome}`)
    };

    //metodo privado
    const metodoSeguro=()=>{
        //uso somente dentro da função construtora
    };

}

const pessoa1 = new Pessoa('Thiago',"Ventura");
console.log(pessoa1.nomeCompleto());