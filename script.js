let input = document.getElementById("input");
let button = document.getElementById("btn");
let list = document.getElementById("list");

const CreatePost = () => {
  let listItem = input.value;
  list.innerHTML += `
  <p id="postItem">${listItem}
  <button type="button" onclick="EditPost()">Edit</button>
  <button type="button" onclick="DeletePost()">Delete</button>
  </p>
  `; 
}

const EditPost = () => {
  let listItem = input.value;
  let post = document.getElementById("post");
  console.log("Edit");
  let edit = prompt("Enter your edit");
  if(edit != ""){
  listItem.innerHTML = edit;
  } else {
    alert("enter a valid edit");
  };
};

const DeletePost = () => {
  let listItem = input.value;
  list.innerText = ""; 
  console.log("Delete");
}