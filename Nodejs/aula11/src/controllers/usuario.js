exports.info=(req,res)=>{

    const data={
        usuarios:['Thiago','Marisa','Fernanda'],
        titulo:'Usuarios'
    }
    res.render('usuario',{data:data})
}