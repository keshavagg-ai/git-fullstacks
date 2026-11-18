console.dir(window);
// console.log(document.body.children);
// console.log(document.body.children[0]);
// console.log(document.body.children[1].children);
// console.log(document.body.children[1].children[0]);

console.log(document.getElementById("title"));
console.log(document.getElementsByClassName("item"));

console.log(document.querySelector(".item"));
console.log(document.querySelectorAll(".item"));
console.log(document.querySelector("#list .special"));

const t = document
const note = document.querySelector(".note");
console.log(note.innerText);
console.log(note.innerHTML);
note.innerText = "Prices in <i>USD</i>";
note.innerHTML = "Prices in <i>USD</i>";
