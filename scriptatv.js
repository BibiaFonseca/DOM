//Buscando elementos por id
let titulo = document.getElementById("titulo");
console.log(titulo.textContent);

// Buscando elementos por classe
let futebol = document.getElementsByClassName("fut");
console.log(futebol[0].textContent);
let basquete = document.getElementsByClassName("bas");
console.log(basquete[0].textContent);
let volei = document.getElementsByClassName("vol");
console.log(volei[0].textContent);
let tenis = document.getElementsByClassName("ten");
console.log(tenis[0].textContent);
let hoquei = document.getElementsByClassName("hoq");
console.log(hoquei[0].textContent);

//Selecionando pelo nome da tag
let lista = document.getElementsByTagName("li");
console.log(lista);

//Selecionando pelo query selector
//"#" significa id -> O nome do id é titulo
//"." significa classe -> O nome da classe é descricao
let tituloQS = document.querySelector("#titulo");
let listaQS = document.querySelector(".fut");
let lista2QS = document.querySelector(".bas");
let lista3QS = document.querySelector(".vol");
let lista4QS = document.querySelector(".ten");
let lista5QS = document.querySelector(".hoq");
console.log("Exibindo com Query Selector " + tituloQS.textContent);
console.log("Exibindo com QS a lista: " + listaQS.textContent);
console.log("Exibindo com QS a lista" + lista2QS.textContent);
console.log("Exibindo com QS a lista" + lista3QS.textContent);
console.log("Exibindo com QS a lista" + lista4QS.textContent);
console.log("Exibindo com QS a lista" + lista5QS.textContent);