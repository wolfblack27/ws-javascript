/*import { nome as name,sobrenome,soma } from "./modulo1";
const nome = 'Qualquer coisa' // para não conflitar com o nome importado usamos o 'as' para apelidar o nome exportado
alert(`Nome completo: ${name} ${sobrenome}`);
console.log(soma(5,12));
*/

import { galinha } from "./modulo2";
import * as modulo from "./modulo1" // importa tudo
import { filmes } from "./modulo2";

alert(modulo.idade); // o modulo1 foi apelidado de modulo e se comporta como objeto
console.log(modulo.nome,modulo.sobrenome,modulo.soma(5,18))

const ave1 =galinha(25,1);
console.log(ave1.peso);

for(let filme of filmes){

    console.log(filme.ano);
}


