const pokemons = [
  {
    id: 1,
    name: "bulbasaur",
    img: "https://static.wikia.nocookie.net/kingdom-keymasters-database/images/2/27/001Bulbasaur_XY_anime.png/revision/latest?cb=20160927122032",
    likes: 4,
  },
  {
    id: 2,
    name: "ivysaur",
    img: "https://static.wikia.nocookie.net/kingdom-keymasters-database/images/c/ca/002Ivysaur_XY_anime_2.png/revision/latest?cb=20161017212021",
    likes: 21,
  },
  {
    id: 3,
    name: "venusaur",
    img: "https://images.saymedia-content.com/.image/t_share/MTc2MjYwODQ5NTk2NTcyODYy/pokemon-venusaur-nicknames.png",
    likes: 7,
  },
  {
    id: 4,
    name: "charmander",
    img: "https://pixy.org/download/1207107/",
    likes: 20,
  },
  {
    id: 5,
    name: "charmeleon",
    img: "https://static.wikia.nocookie.net/pokemon-quest-adventures/images/a/a4/005Charmeleon_XY_anime_2.png/revision/latest?cb=20170313041459",
    likes: 11,
  },
];
/////////


// Identify the following css selectors
// id: #idName unique
// class: .className
// element: elementName, p

// What is DOM?
//Document Object Model

// How do we start manipulating things on our DOM?

// Remember to include "defer" key in the JS link in index.html

//How do we access  elements, select elements

// Identify the following css selectors
// id: #idName unique 
// class: .className
// element: elementName, p 

// What is DOM?
// Document Object Model

// How do we start manipulating things?

// How do we access elements, select elements

// document.getElementById()
// accepts the id as an argument
// returns the first match

const pokeForm = document.getElementById('poke-form')
console.log(pokeForm)

// document.getElementsByClassName()
// accepts class name as the argument
// returns multiple elements

const label = document.getElementsByClassName('form-label')
console.log(label)
// console.log(Array.from(label)) -- Converts HTML Collection into an Array.

//document.querySelector()
// console.log(pokeForm)

// document.getElementsByClassName()
// accepts class name as the argument
// returns multiple elements, as an HTMLCollection
// to convert collection to an array, Array.from()

const label = document.getElementsByClassName('form-label')
// console.log(label)

// document.querySelector()
// accepts different selectors: ids, class, tags
// returns the first value that matches the provided selector

const goalsDiv = document.querySelector('#lecture-goals')
console.log(goalsDiv)

// document.querySelectorAll()
// returns a collections of elements that match the selector
// console.log(goalsDiv)

// document.querySelectorAll()
// returns a collection of elements that match the selector 
// .forEach can be used on this collection
// returns a NodeList

const allDivs = document.querySelectorAll('div')
console.log(allDivs)

const pokeContainer = document.querySelector('#poke-container')

// Creating elements

pokemons.forEach(function(pokemon) {
renderPokemon(pokemon)
})

// shorter syntax
// pokemons.forEach(renderPokemon)

function renderPokemon(character){
  //create elements thats display our characters properties to the DOM

  // create a div
// console.log(allDivs)

// selecting the pokeContainer
const pokeContainer = document.querySelector('#poke-container')

// Creating elements 

pokemons.forEach(function(pokemon){
  // do something/write some logic
  renderPokemon(pokemon)
})

// shorter syntax 
// pokemons.forEach(renderPokemon)

function renderPokemon(character){
  console.log(character)
  // create elements that display our characters properties to the DOM 

  // create a div 
  const pokeCard = document.createElement('div') // creating a node
  pokeCard.id = `poke-${character.id}`
  pokeCard.className = "poke-card"

  const pokeImg = document.createElement('img')
  pokeImg.src = character.img
  pokeImg.alt = `${character.name} image`

  // adding pokeCard to pokeContainer

  pokeCard.appendChild(pokeImg) 
  pokeContainer.appendChild(pokeCard)

  pokeCard.appendChild(pokeImg)
  pokeContainer.appendChild(pokeCard)
}

// ways to add new elements to existing element
// .appendChild - takes in 1 argument, and it MUST BE a node
// .append - take in multiple arguments and they dont have to be nodes

// document.createElement()
// creates nodes
// .innerHTML
// creates strings that represent the element

// Updating elements
// .append - take in multiple arguments, and they dont have to be nodes

// document.createElement()
  // creates nodes 
// .innerHTML 
  // creates strings that represent the element

// Updating elements 

// select the element we want to change
// set it equal to its new value

const header = document.querySelector('#header')
header.innerHTML = `<img id="header-img"
          src="https://external-preview.redd.it/tQged7mKJ3cUpNMq5IMeceZvyKP3cTyHqhNmKEQ0Vv8.png?auto=webp&s=fb5fd61cae0bc9cde2bc2a006b1e2aeb0c935ce9"
/>`
// adds to exisitng

// header.appendChild() -- want to pass thru a node; createElement

// header.append() -- appends a literal string

// const headerIMG = document.createElement('img)
// const h1 = document.querySelector(h1)
// console.log(h1)
// headerImg.id = "header-img"
// headerImg.src = ""

// Remove elements from our DOM

// .remove() called on the targeted element

const lectureGoals = document.querySelector('#lecture-goals')
// const lectureGoals = document.querySelector('#lecture-goals').remove()
lectureGoals.remove()

src="https://external-preview.redd.it/tQged7mKJ3cUpNMq5IMeceZvyKP3cTyHqhNmKEQ0Vv8.png?auto=webp&s=fb5fd61cae0bc9cde2bc2a006b1e2aeb0c935ce9"
/>`

// const headerImg = document.createElement('img')
// const h1 = document.querySelector('h1')
// console.log(h1)
// headerImg.id = "header-img"
// headerImg.src = "https://external-preview.redd.it/tQged7mKJ3cUpNMq5IMeceZvyKP3cTyHqhNmKEQ0Vv8.png?auto=webp&s=fb5fd61cae0bc9cde2bc2a006b1e2aeb0c935ce9"

// header.replaceChild(headerImg, h1)

// Remove elements from our DOM 

// .remove() called on the targeted element 

document.querySelector('#lecture-goals').remove()
// const lectureGoals = document.querySelector('#lecture-goals')
// lectureGoals.remove()
