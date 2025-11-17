function getlacomidaDeMama(id){

if (id == 1){
fetch ('https://dummyjson.com/recipes/1')

.then(Response => Response.json())
.then ((data) => { console.log(data.name, data.ingredients, data.instructions, data.prepTimeMinutes,  data.image );
document.getElementById("output").innerHTML = data.name;
document.getElementById("output2").innerHTML = '<b>Ingredientes:</b><br> ' + data.ingredients;
document.getElementById("output3").innerHTML =  'Instrucciones:<br> ' + data.instructions;
document.getElementById("output4").innerHTML = 'Temperatura: ' + data.prepTimeMinutes + ' Minutos';
document.getElementById("output7").innerHTML =  data.image;
 })
    .catch(error => { // Correctly place .catch() at the end of the promise chain
        console.error("Error fetching recipes:", error);
    });} 
    
    if (id == 2){

    fetch ('https://dummyjson.com/recipes/2')

.then(Response => Response.json())
.then ((data) => { console.log(data.name, data.ingredients, data.instructions, data.prepTimeMinutes );
document.getElementById("output").innerHTML = data.name;
document.getElementById("output2").innerHTML = '<b>Ingredientes:</b><br> ' + data.ingredients;
document.getElementById("output3").innerHTML =  'Instrucciones:<br> ' + data.instructions;
document.getElementById("output4").innerHTML = 'Temperatura: ' + data.prepTimeMinutes + ' Minutos';
 })
    .catch(error => { // Correctly place .catch() at the end of the promise chain
        console.error("Error fetching recipes:", error);
    });}

      if (id == 3){

    fetch ('https://dummyjson.com/recipes/3')

.then(Response => Response.json())
.then ((data) => { console.log(data.name, data.ingredients, data.instructions, data.prepTimeMinutes );
document.getElementById("output").innerHTML = data.name;
document.getElementById("output2").innerHTML = '<b>Ingredientes:</b><br> ' + data.ingredients;
document.getElementById("output3").innerHTML =  'Instrucciones:<br> ' + data.instructions;
document.getElementById("output4").innerHTML = 'Temperatura: ' + data.prepTimeMinutes + ' Minutos';
 });
}    if (id == 4){

    fetch ('https://dummyjson.com/recipes/4')

.then(Response => Response.json())
.then ((data) => { console.log(data.name, data.ingredients, data.instructions, data.prepTimeMinutes );
document.getElementById("output").innerHTML = data.name;
document.getElementById("output2").innerHTML = '<b>Ingredientes:</b><br> ' + data.ingredients;
document.getElementById("output3").innerHTML =  'Instrucciones:<br> ' + data.instructions;
document.getElementById("output4").innerHTML = 'Temperatura: ' + data.prepTimeMinutes + ' Minutos';
 });
}
 if (id == 5){

    fetch ('https://dummyjson.com/recipes/5')

.then(Response => Response.json())
.then ((data) => { console.log(data.name, data.ingredients, data.instructions, data.prepTimeMinutes);
document.getElementById("output").innerHTML = data.name;
document.getElementById("output2").innerHTML = '<b>Ingredientes:</b><br> ' + data.ingredients;
document.getElementById("output3").innerHTML =  'Instrucciones:<br> ' + data.instructions;
document.getElementById("output4").innerHTML = 'Temperatura: ' + data.prepTimeMinutes + ' Minutos';

 });
} if (id == 6){

    fetch ('https://dummyjson.com/recipes/6')

.then(Response => Response.json())
.then ((data) => { console.log(data.name, data.ingredients, data.instructions, data.prepTimeMinutes );
document.getElementById("output").innerHTML = data.name;
document.getElementById("output2").innerHTML = '<b>Ingredientes:</b><br> ' + data.ingredients;
document.getElementById("output3").innerHTML =  'Instrucciones:<br> ' + data.instructions;
document.getElementById("output4").innerHTML = 'Temperatura: ' + data.prepTimeMinutes + ' Minutos';
 });

}
}