const button = document.createElement("button");
button.textContent = "Click me";
button.id = "clickMe";



document.body.appendChild(button);

  button.addEventListener("click", () => {
  
  
  alert("Click event listener was added");
  console.log("helo world")

});






