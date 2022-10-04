console.log("JS is started");

// DOM - Document object module

let byId = document.querySelector("#desc")
let byClass = document.querySelector(".title")

console.log(byId);
console.log(byClass);



let items = document.querySelectorAll(".item")

console.log(items);



let root = document.querySelector("#root")

let newDiv = document.createElement("div")

newDiv.className = "box"

root.appendChild(newDiv)


let root2 = document.querySelector("#root")

let newh1 = document.createElement("h1")

newh1.innerHTML = "JS"

newh1.className = "h1"
console.log(newh1);

root.appendChild(newh1)












