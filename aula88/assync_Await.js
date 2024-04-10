
function rand(min, max) {
  min *= 100;
  max *= 100;
  return Math.floor(Math.random() * (max - min) + min);
}

function esparaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("Dado Invalido");
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

async function executa() {
  try {
    const fase1 = await esparaAi("fase1", rand(1, 3));
    console.log(fase1);
    const fase2 = await esparaAi("fase2", rand(1, 4));
    console.log(fase2);
    const fase3 = await esparaAi(2, rand(1, 5));
    console.log(fase3);
  } catch (error) {
    console.log(error);
  }
}

executa();
console.log(nomes)