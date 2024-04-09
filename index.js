// //HTML CON UN DIV

// let div = document.getElementById("aplicacion");
// console.log(div);


// // TRAEMOS A LA CONSOLA CON EL INNERHTML Y EL INNERTEXT

// let div = document.getElementById("aplicaion");
// console.log(div.innerHTML);
// console.log(innerText);

//Tambien lo podemos traer con clases

// let perritos = document.getElementsByClassName("perritos");
// console.log(perritos[0].innerHTML);
// console.log(perritos[1].innerHTML);
// console.log(perritos[2].innerHTML);

//Ahora hacremos con varios divs

// let divs = document.getElementsByTagName("div");
// 	console.log(divs[0].innerHTML);
//     console.log(divs[1].innerHTML);
//     console.log(divs[2].innerHTML);


//Tambien podemos hacer un for of   que recorra por ejemplo la liasta de perritos

// let perritos = document.getElementsByClassName("perritos");
// for(const perrito of perritos){  
// console.log(perrito.innerHTML);
// }

//let seccion = prompt("elige a la seccion a donde quieras ingresar"); 

// let saludo = document.getElementById("saludo");
// saludo.innerHTML = "hola coder";

// interactuando con el DOM, usando condicionales, y prompt

// let saludo = document.getElementById("saludo");

// let seccion = prompt("elige a la seccion a donde quieras ingresar"); 

// if (seccion === "carrito") {
//     saludo.innerHTML = "Bienvenido al carrito";
// }else if (seccion === "favoritos"){
//     saludo.innerHTML = "Bienvenido a favoritos";
// } else {
//     saludo.innerHTML = "<h1>Binevanidos a la plataforma</h1>";
// }

//tambien podemos poner estilos desde js desde el css.

// let saludo = document.getElementById("saludo");

// let seccion = prompt("elige a la seccion a donde quieras ingresar"); 

// if (seccion === "carrito") {
//     saludo.innerHTML = "Bienvenido al carrito";
//     saludo.className = "rojo";
// }else if (seccion === "favoritos"){
//     saludo.innerHTML = "Bienvenido a favoritos";
//     saludo.className = "azul";
// } else {
//     saludo.innerHTML = "<h1>Binevanidos a la plataforma</h1>";
//     saludo.className = "amarillo";
// }


// ----77createElement

// let parrafo = document.createElement("p"); //creacion
// parrafo.innerHTML = "<h1>Hola  A todos</h1>";// asignacion de contenido

// //asignaion de un padre

// document.body.append(parrafo);

// asiganamos como padre al contenedor que es el div



// let contenedor = document.getElementById("contenedor"); // asignacion de nuevo padre
// let parrafo = document.createElement("p"); //creacion
// parrafo.innerHTML = "<h1>Hola  A todos</h1>";// asignacion de contenido

// //asignaion de un padre nuevo padre contenedor

// contenedor.append(parrafo);

//para eliminar un id

// let saludo = document.getElementById("saludo");
// saludo.remove();


// creamos una lista ordenada des js

// let personas = ["manuel", "adrian", "jeronimo", "andres"];
// let lista = document.getElementById("personas");

// for (const persona of personas) {
//     let li = document.createElement("li");
//     li.innerHTML = persona;
//     lista.append(li);
    
// }


//agregando un objeto al DOM


// let producto = {
//     id: 1,
//     nombre: "camisa",
//     precio: 1000
// };

// let coontenedor = document.getElementById("contenedor");
// coontenedor.innerHTML = `
//                          <h3> ID: ${producto.id}</h3>
//                           <p> NOMBRE: ${producto.nombre}</p>
//                           <b> PRECIO: ${producto.precio}</b>
//                           `;

//creamnos un array con varios obajetos

const productos = [
    {id: 1, nombre: "zapato", precio:1000},
    {id: 2, nombre: "remera", precio:700},
    {id: 3, nombre: "pantalon", precio:900},
    {id: 4, nombre: "camisa", precio: 800},
];

let contenedor = document.getElementById("contenedor");

for (const producto of productos) {
    let div = document.createElement("div");
    div.innerHTML =  `
                         <h3> ID: ${producto.id}</h3>
                         <p> NOMBRE: ${producto.nombre}</p>
                         <b> PRECIO: ${producto.precio}</b>
     `;
    
     contenedor.append(div);
}