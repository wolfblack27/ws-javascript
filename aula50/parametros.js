/*const funcao = function(){
    let total=0;
    for(let valor of arguments){
        total+=valor;
    }
    console.log(total)
}
funcao(0,1,2,3,4,5,6,7,8,9);*/


//Argumentos com valores pre definidos
/*const soma = function(a=1,b=10,c=4){

    console.log(a+b+c);

};
soma();
soma(10,2,1);*/


//Função com destruturação
function funcao([valor1,valor2,valor3]){

    console.log(valor1,valor2,valor3);

}
funcao(['Thiago','Ventura',30]);

