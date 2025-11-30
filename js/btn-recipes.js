

function getlacomidaDeMama(id){


fetch ('https://dummyjson.com/recipes/' + id)

.then(Response => Response.json())
.then ((data) => { console.log(data.name,data, data.ingredients, data.instructions, data.prepTimeMinutes,  data.image );
document.getElementById("output").innerHTML = '<b>Dish:</b> ' + data.name;
document.getElementById("output2").innerHTML = '<b>Ingredientes:</b><br> ' + data.ingredients;
document.getElementById("output3").innerHTML =  '<b>Instrucciones:</b><br> ' + data.instructions;
document.getElementById("output4").innerHTML = '<b>Temperatura:</b> ' + data.prepTimeMinutes + ' Minutos';

//document.getElementsByClassName("gallery2")[0].innerHTML =  `<img src=${data.image} width="500px">`;
document.getElementById("output8").innerHTML =  `<img src=${data.image} width="400px">`;
document.getElementById("output9").innerHTML =  `<img src=${data.image} width="300px">`;
 })
    .catch(error => { // Correctly place .catch() at the end of the promise chain
        console.error("Error fetching recipes:", error);
    });
    
   
}

     


getlacomidaDeMama(1)


