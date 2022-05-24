const students =[

    {
        name: "Alex",
        lastname: "Linares",
        age: 25,
        addres: "candelaria"
    },


     {
        name: "Jacky",
        lastname: "figueroa",
        age: 25,
        addres: "sonsonate"
         
     }, 

     {
        name: "Roberto",
        lastname: "gonzalez",
        age: 30,
        addres: "sonsonate"
         
     }


]


const Players = [

    {
        name: "Neymar",
        team: "PSG",
        position: "forward",
        age: 30,
        previousTeam:["Santos", "Barcelona"] 
    },

    {
        name: "Cristiano",
        team: "Manchester United",
        position: "forward",
        age: 36,
        previousTeam:["Sporting", "Real Madrid", "Juventus"] 
    },

    {
        name: "Messi",
        team: "PSG",
        position: "forward",
        age: 40,
        previousTeam:["Barcelona", "PSG"] 
    },


    {
        name: "Ter Stegen",
        team: "Barcelona",
        position: "goalkeeper",
        age: 29,
        previousTeam:["Borrusia Dortmound", "Barcelona"] 
    },

    {
        name: "Halland",
        team: "Manchester City",
        position: "forward",
        age: 22,
        previousTeam:["Zalsburgo","Borrusia Dortmound", "Manchester City"] 
    }
]

//listando data con For Each

const listData = document.getElementById('listStudent');

let listoutput = '';

students.forEach(function(student, index){
 
 
     listoutput = listoutput + `<li class="list-group-item" >${student.name}     <span class="badge bg-primary rounded-pill">${index}</span></li>`
     
     console.log(index)
})

listData.innerHTML = listoutput;



//listando datos con map 



const listPlayer = document.getElementById('listmap');

let listoutPlayer = '';

/*
Players.map(function(player){

    listoutPlayer = listoutPlayer + `<li class="list-group-item" >${player.name}   
    <span class="badge bg-primary rounded-pill"></span></li>`


})

}*/

//map utilizando funcion de flecha

Players.map((player)=> listoutPlayer += `<li class="list-group-item" >${player.name}   
<span class="badge bg-primary rounded-pill">${player.team}</span></li>`)

listPlayer.innerHTML = listoutPlayer;

//obteniendo un nuevo arreglo con map

const listCopyPlayer = document.getElementById('listMapt');

let lisOutputNplayer = '';

   /*   const newPlayers =   Players.map((player)=> {

    return {
        
        ...player,
        namePosition: `${player.name} - ${player.position}`
      
   

    }
})
*/

//map sin utilizar el return

newPlayers = Players.map((player => ({

    ...player,
    namePosition: `${player.name} - ${player.position}`
})))

newPlayers.map((newPlayer)=>{

    lisOutputNplayer += `<li class="list-group-item" >${newPlayer.namePosition}   
     <span class="badge bg-primary rounded-pill">${newPlayer.team}</span></li>`

})
console.log(lisOutputNplayer)

listCopyPlayer.innerHTML = lisOutputNplayer
console.log(newPlayers);

// FILTER


listFilter = document.getElementById('listFilter');
let salida = ''



    

     FilterResult = Players.filter((Fplayer)=>{

        if(Fplayer.team =="Barcelona"){
          return true
        }
      


      })

FilterResult.forEach(function(searc){

salida += `<li class="list-group-item" >${searc.name}   
<span class="badge bg-primary rounded-pill">${searc.position}</span></li>`

})


listFilter.innerHTML= salida;

console.log(FilterResult);


//REDUCE

const result = Players.reduce(function(allteam, rplayer){

    return Array.from(new Set( [...allteam, ...rplayer.previousTeam])) 


},[])


console.log(result)

/*
const totalEdad = students.reduce(function(total, student){

return total + student.age;



},0)

*/

const totalEdad = students.reduce((total, student)=> total + student.age,0)



console.log(totalEdad)


//sort


  const listSortData = document.getElementById('listSort');
  let outputSort = '';
   /*
  const sortList = Players.sort(function(a,b){

    if(a.age > b.age){
        return 1
    } else {
   
        return -1
 

    } 




}) */

const sortList = Players.sort((a,b)=> a > b  ? 1 : -1);

Players.forEach(function(sortPlayer){


    outputSort += `<li class="list-group-item" >${sortPlayer.name}   
    <span class="badge bg-primary rounded-pill">${sortPlayer.age}</span></li>`

})

listSortData.innerHTML =  outputSort;
console.log(sortList);



//FIND


function search (sr){


return Players.find((f)=> f.team === sr   )


}

console.log(search("PSG"))

//SOME => Retorna un valor boleano, no retorna un arreglo


const someResult = Players.some((som)=> som .team === "fulgam" ? true : false)

console.log(someResult);


//EVERY: comprueba una condiciona para todos los elementos de un arreglo, si un indice de un arreglo no 
// cumple la condicion retornara false


const resultEvery = Players.every((p)=> p.position.includes('a'))

console.log(resultEvery);

