const fs = require('fs').promises;
const  path = require('path')
/*
fs.readdir(path.resolve(__dirname)).then((filees)=>{
    console.log(filees)

}).catch((e)=>{console.log(e)})*/


async function readdir(rootdir){
    rootdir = rootdir || path.resolve(rootdir) // resolve o caminho absoluto
    const files = await fs.readdir(rootdir)
    walk(files,rootdir)
    

}


async function walk(files,rootdir){

    for(let file of files){
        
        const fileFullPath = path.resolve(rootdir,file);
        const stars = await fs.stat(fileFullPath)
        console.log(file,stars.isDirectory())
        if(stars.isDirectory){
            readdir(fileFullPath);
            continue;
        }
    
        console.log(file,stars.isDirectory())
    }

}

readdir('C:/Users/Casa/Documents/ws-javascript')