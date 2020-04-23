"use strict";

//window.document.documentElement.body
//-----------------------устаревшие методы-------------------
/*let coffeeMachine = document.getElementById("coffee"); //поиск по id
console.log(coffeeMachine);
let images = document.getElementsByTagName("img"); // поиск по тэгу
console.log(images);
let coffeeItems = document.getElementsByClassName("coffee-item"); // поск по классу
console.log(coffeeItems);
let firstImage = coffeeItems[0].getElementsByTagName("img");
console.log(firstImage[0]);*/
//--------------------------------------------

//--------------------Современные методы-----
/*let coffeeMachine = document.querySelector("#coffee");
console.log(coffeeMachine);
let image = document.querySelector("img"); // если элементов несколько найдет и выдаст только первый
console.log(image);
let coffeeItems = document.querySelectorAll(".coffee-item");
console.log(coffeeItems);
let itemImages = document.querySelectorAll(".coffee-item img");
console.log(itemImages);
let cupImages = document.querySelectorAll(".coffee-item img, .coffee-cup img");
console.log(cupImages);*/

//---------------------работа с элементами----------------
/*let coffeeMachine = document.querySelector(".coffee-machine");
coffeeMachine.style.border = "8px solid darkblue";
coffeeMachine.style.borderRadius = "25px"; //если свойство css из двух слов пишется слитно через большую букву второго слова
coffeeMachine.style.position = "absolute";
coffeeMachine.style.top = "15px";
coffeeMachine.style.left = "150px";
let coffeeMachineTop = coffeeMachine.style.top;
console.log( parseInt(coffeeMachineTop) );*/

// изменение атрибутов

/*let balance = document.querySelector("input[type='text']");
let balanceType = balance.getAttribute("type");
console.log(balanceType);
balance.setAttribute("type", "date");

console.log( balance.hasAttribute("placeholder") )
balance.removeAttribute("aria-label");

balance.value = 500;
console.log(balance.value);*/

//изменение классов
/*let changeButton = document.querySelector(".btn");
console.log(changeButton.classList);
changeButton.classList.remove("btn-primary");
changeButton.classList.add("btn-success");*/
//changeButton.classList.toggle("") // вкл.\выкл.

//изменение содержимого элементов
/*let displayText = document.querySelector(".display-text");
console.log(displayText.innerHTML);
console.log(displayText.innerText);
//displayText.innerHTML = "<b>Готовим кофе</b>";
displayText.innerText = "<b>Готовим кофе</b>";*/

// события слушателей и событий

// 1. с помощью атрибута


//-------------------- Планирование---------
// таймаут

/*let timeout = setTimeout(paintBody, 5000, 'cadetblue');

let changeButton = document.querySelector(".btn");
changeButton.onclick = function () {
  clearTimeout(timeout);
}
setTimeout(function () {
  painBody();
}, 5000);

function paintBody(color) {
  document.body.style.background = color;
} */


/*let coffeeMachine = document.querySelector('.coffee-machine');
coffeeMachine.style.position = "absolute";*/

/*let interval = setInterval(trashConsole, 2000);

let changeButton = document.querySelector('.btn');
changeButton.onclick = function() {
  clearInterval(interval);
}

function trashConsole() {
  console.log(Math.random());
}

*/


//changeBox.append(coin); //добавляет в конец внутри элемента
  //changeBox.after(coin); //после элемента
  //changeBox.befor(coin); //перед элементом
  //changeBox.prepend(coin); //добавляеь в начало внутри элемента
  //changeBox.replaceWith(coin); //заменяет элеимент
