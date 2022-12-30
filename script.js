// Global Variables for input form and todo list
let input = document.getElementById("input");
let button = document.getElementById("btn");
let list = document.getElementById("list");

 // Submits on keypress
 input.addEventListener("keydown", function(e) {
   if (e.key === "Enter"){
    button.click();
    input.value === "";
    e.preventDefault();
   }
 })

// Creates post 
const CreatePost = () => {
  let listItem = input.value;
  if(listItem === ""){
    alert('Please enter valid input!');
  } else {
  list.innerHTML += `
  <div id="post">
  <p id="postItem">${listItem}</p>
  <button type="button" onclick="EditPost()">Edit</button>
  <button type="button" onclick="DeletePost()">Delete</button>
  </div>
  `; 
  preventDefault()
  }};

// Edits post
const EditPost = () => {
  let post = document.getElementById("postItem");
  let editToPost = prompt("Enter your edit!");
  if (editToPost === ""){
    alert("Please enter an edit!");
  } else {
    post.innerHTML = editToPost;
    console.log("user post assigned to edit");
  }
};

// Deletes post
const DeletePost = () => {
  let listItem = input.value;
  list.innerText = ""; 
  console.log("Delete");
}