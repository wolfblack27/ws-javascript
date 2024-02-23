
function f1(callback){
    console.log('função 1')
    if (callback) callback();
}

function f2(callback){

    console.log('função 2');
    if (callback) callback();
}


function f3(callback){

    console.log('função 3')
    if (callback) callback();
   
}

f1(()=>{
    f2(()=>{
        f3(()=>{
            console.log('fim');
        });
    });

    
});