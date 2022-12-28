let input = document.getElementById("input");
let button = document.getElementById("btn");
let list = document.getElementById("list");

const InputValue = () => {
  let listItem = input.value;
  list.innerHTML = listItem; 
}