//PUSH y UNSHIFT y POP Y SHIFT
var colores = ['amarillo', 'azul'];
colores.push('rojo');
colores.unshift('verde');
colores.pop();
colores.shift();
console.log(colores);

//INCLUDES

var pintores =["Picaso", "Velazquez", "Van Gogh", "Dali"];
var incluyeDali = pintores.includes("Dali");
console.log(incluyeDali);

//EVERY

var numeros =[1, 6, 8, 9];
var cumplenCondicion = numeros.every((num) => {num > 5;});
console.log(cumplenCondicion)

//SPLIT Y JOIN

var palabra = "Henry";
var palabraSeparada = palabra.split('');
palabraSeparada.pop();
palabraSeparada.push('y');
console.log(palabraSeparada);
var palabaraArregalda = palabraSeparada.join('');
console.log(palabraArreglada);

//FOREACH

var numeros = [1, 2, 3, 4];
numeros.forEach((num) => console.log(num));
numeros.forEach(num => {if(num === 3) {console.log(num)}});


//MAP

var masUno = numeros.map((num) => {console.log (num + 1)});
