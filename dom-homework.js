let colors = ["red", "green", "blue", "yellow", "orange", "purple", "pink", "cyan", "magenta", "lime", "teal", "indigo", "violet", "brown", "gray", "maroon", "navy", "olive", "silver", "gold", "coral", "crimson", "darkblue", "darkgreen", "darkred", "darkcyan", "darkmagenta", "darkorange", "darkviolet"];

const myDiv = document.getElementById("myDiv");

function changeColor(element, color) {
    element.style.color = color;
}

const highlight = document.getElementsByClassName("highlight");
highlight[0].style.backgroundColor = "blue";

myButton = document.getElementById("myButton");

myButton.addEventListener("click", function() {
    const newListItem = document.createElement("li");
    newListItem.textContent = "New List Item " + (myDiv.querySelectorAll("li").length + 1);
    changeColor(newListItem, colors[Math.floor(Math.random() * colors.length)]);
    const ul = myDiv.querySelector("ul");
    ul.appendChild(newListItem);
});


function changeBackColor(element, color) {
    element.style.backgroundColor = color;
}

myDiv.addEventListener('click', function() {
  myDiv.style.backgroundColor = changeBackColor(myDiv, colors[Math.floor(Math.random() * colors.length)]);
});