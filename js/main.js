const perfiles = [
  {
   nombre: "Robert",
    edad: 30,
    ciudad: "New York",
    descripcion: "nacido en lalal con  hfhhfhshfhhsfh kfsjfjjf uhdbfsuhbfushbush",
    imageURl: './assets/images/chef1.png'
    
  
  },
  {
    
    nombre: "Luis",
    edad: 25,
    ciudad: "Barcelona",
    descripcion: "nacido en lalal con  hfhhfhshfhhsfh kfsjfjjf uhdbfsuhbfushbush",
    imageURl: './assets/images/chef2.png'

  },
  {
     
    nombre: "Sofía",
    edad: 28,
    ciudad: "Valencia",
    descripcion: "nacido en lalal con  hfhhfhshfhhsfh kfsjfjjf uhdbfsuhbfushbush",
    imageURl: './assets/images/chef3.png'
  },
  {
     
    nombre: "Valeria",
    edad: 28,
    ciudad: "Valencia",
    descripcion: "nacido en lalal con  hfhhfhshfhhsfh kfsjfjjf uhdbfsuhbfushbush",
    imageURl: './assets/images/chef4.png'
  }
];

perfiles.forEach(perfil => {
console.log(`Nombre: ${perfil.nombre}, Edad: ${perfil.edad}, Ciudad: ${perfil.ciudad}, imagen: ${perfil.imagen}`);

});


