let input = document.getElementById("input");
let button = document.getElementById("btn");
let list = document.getElementById("list");

const CreatePost = () => {
  let listItem = input.value;
  list.innerHTML += `
  <p>${listItem}
  <button type="button" onclick="EditPost()">Edit</button>
  <button type="button" onclick="DeletePost()">Delete</button>
  </p>
  `; 
}

const EditPost = () => {
  let listItem = input.value;
  console.log("Edit");
  let edit = prompt("Enter your edit");
  listItem.innerHTML += edit;

}

const DeletePost = () => {
  let listItem = input.value;
  console.log("Delete");
  listItem.innerHTML = ""
}