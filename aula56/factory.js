function criaPessoa(nome,sobrenome,a,p){

    return{

        nome,
        sobrenome,
        altura:a,
        peso:p,
        
        
        falaAssunto: function(assunto){
            return `${this.nome} esta falando ${assunto}`;
        },
        

        //Acessando o IMC como se fosse uma função
        get imc(){
            const indice = this.peso/(this.altura**2);
            return indice.toFixed(2)
        },


        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        
        //Acessando pelo get
        get nomeCompleto(){

            return `${this.nome} ${this.sobrenome}`
        }


        
    };

};

const p1 = criaPessoa('thiago','ventura',1.74,96);
console.log(p1.falaAssunto('sobre java'));
console.log(p1.imc);
p1.nomeCompleto = 'Marisa Ventura da Cruz';
console.log(p1.nomeCompleto);
console.log(p1.sobrenome);
console.log(p1.falaAssunto('enfermagem'));