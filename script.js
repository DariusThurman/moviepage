// variables allow us to store and manipulate data for later use
var name = "Darius"
var age = 26
age = 27
console.log(age);
//age is 27 because new value replaced old

//functions allow us to execute repeatable logic or instructions

function addfour(input){
  //do something with the input
  var result = input + 4
  return result
}
console.log(age)
console.log(addfour(age));

document.addEventListener('click',changeColor)

function changeColor(){
  console.log('I was clicked')
  var navbar = document.querySelector('#navbar ul')
  navbar.style.backgroundColor = 'blue'
}