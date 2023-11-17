/*operador ternario*/
const pontuacaoUsuario =1000;

//ternario                  condicao         verdadeiro      falso
const nivelUsuario = pontuacaoUsuario>=1000?'Usuario VIP':'Usuario Normal'

//Um outro ternario:
const corUsuario =null
const corPadrao = corUsuario || 'Preta'
console.log(nivelUsuario, '-',corPadrao)
