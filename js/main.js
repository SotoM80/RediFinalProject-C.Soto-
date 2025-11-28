const perfiles = [
  {
   nombre: "Ana",
    edad: 30,
    ciudad: "Madrid",
    descripcion: "nacido en lalal con  hfhhfhshfhhsfh kfsjfjjf uhdbfsuhbfushbush",
    imageURl: './assets/images/yo.jpeg'
    
  
  },
  {
    
    nombre: "Luis",
    edad: 25,
    ciudad: "Barcelona",
    descripcion: "nacido en lalal con  hfhhfhshfhhsfh kfsjfjjf uhdbfsuhbfushbush",
    imageURl: './assets/images/yo.jpeg'

  },
  {
     
    nombre: "Sofía",
    edad: 28,
    ciudad: "Valencia",
    descripcion: "nacido en lalal con  hfhhfhshfhhsfh kfsjfjjf uhdbfsuhbfushbush",
    imageURl: './assets/images/yo.jpeg'
  },
  {
     
    nombre: "manuel",
    edad: 28,
    ciudad: "Valencia",
    descripcion: "nacido en lalal con  hfhhfhshfhhsfh kfsjfjjf uhdbfsuhbfushbush",
    imageURl: './assets/images/yo.jpeg'
  }
];

perfiles.forEach(perfil => {
console.log(`Nombre: ${perfil.nombre}, Edad: ${perfil.edad}, Ciudad: ${perfil.ciudad}, imagen: ${perfil.imagen}`);

});