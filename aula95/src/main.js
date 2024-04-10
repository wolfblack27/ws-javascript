import 'core-js/stable';
import 'regenerator-runtime/runtime';

import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

(function(){
    const cpfGerado = document.querySelector(".cpf-gerado");
    const gera = new GeraCPF();
    cpfGerado.innerHTML=gera.geraNovoCpf();

})();