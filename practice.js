const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redP = document.createElement("p");
redP.textContent = "Hey I'm red!";
redP.style.color = "red";

container.appendChild(redP);

const blueHead = document.createElement("h3");
blueHead.textContent = "I'm a blue h3!";
blueHead.style.color = "blue";

container.appendChild(blueHead);

const content2 = document.createElement("div");
content2.style.background = "pink";
content2.style.borderStyle = "solid";
content2.style.borderColor = "black";

const head2 = document.createElement("h1");
head2.textContent = "I'm in a div!";
content2.appendChild(head2);

const para2 = document.createElement("p");
para2.textContent = "ME TOO!";
content2.appendChild(para2);

container.appendChild(content2);

function alertFunction() {
  alert("YAY! YOU DID IT!");
}
const btn = document.querySelector("#btn");

btn.addEventListener("click", alertFunction);

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
})