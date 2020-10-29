let ListadoHeroes = require('../data/heroes.json');

module.exports ={


list : function (req,res){
    res.send(ListadoHeroes)
},

show: function (req,res) {

  let heros=  ListadoHeroes.filter(function(hero){
       if(hero.id == req.params.id)
       res.send(hero)
   })
},

showProf: function(req,res){


    let profesion = ListadoHeroes.find(function(hero){
        return hero.id == req.params.id 
        }
    )
    if (profesion){
        res.send("Hola mi nombre es " + profesion.nombre + " y mi profesion es " + profesion.profesion)

    }else {res.send("no conozco a es heroe")}
},

resena: function(req,res){

    let resenia = ListadoHeroes.find(function(hero){
        return hero.id == req.params.id 
        }
    )
    if (resenia){
        res.send(resenia.nombre + " " + resenia.resena)

    }else {res.send("no conozco a es heroe")}


}



};