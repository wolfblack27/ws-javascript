const intervalo=setInterval(function(){
    console.log("Lembrete");
},1000);


const parada = setTimeout(function(){
    clearInterval(intervalo);
},5000);