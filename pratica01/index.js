//Criar o objeto pessoa com os atributos: nome, peso, altura e listar

const pessoa = function (nome, peso, altura) {
    return {
        nome,
        peso,
        altura,
        listar: function () { return `Nome: ${nome}   -   Peso:${peso} -   Altura:${altura}` },
        imc: function () {
            const i_mc = (parseFloat(this.peso)) / (Math.pow(this.altura, 2))
            if (i_mc < 17) {
                return 'Muito abaixo do peso ideal'
            } else if (i_mc >= 17 && i_mc <= 18.49) {
                return 'Abaixo do peso'
            }else if(i_mc>=18.49 && i_mc<=25){
                return 'Peso Ideal'
            }else if (i_mc >= 25 && i_mc <= 29.99) {
                return 'Acima do peso'
            } else if (i_mc >= 30 && i_mc <= 34.99) {
                return 'Obesidade Grau-1'
            } else if (i_mc >= 35 && i_mc <= 39.99) {
                return 'Obesidade Grau-2'
            } else if (i_mc > 40) {
                return 'obesidade grau 3 (mórbida)'
            }else{return 'Não foi possivel calcular IMC'}

        },

        pesoIdeal: function(imc){
            const pesos=[]
            
            
            for( p of imc){
               
                pesos.push((p * Math.pow(this.altura,2)).toFixed(2))
                
            }

            return pesos
             

        }

    }

}


window.addEventListener("load", () => {
    console.log("SVG loaded.");
    const resposta = document.querySelector('.resultado')
    const form = document.querySelector('form');
    const nome = form.querySelector('.nome')
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')
    
    
    form.addEventListener('submit',(envento)=>{
        envento.preventDefault();
        p1 = pessoa(nome.value,peso.value,altura.value )
        resposta.innerHTML=` Dados: ${p1.listar()} - ${p1.imc()} - ${p1.pesoIdeal([18.5,25])}`
        

    });
    
    
    
  });




