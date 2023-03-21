const myButton = document.getElementById("myButton");
const ingredientsList = document.getElementById("ingredientsList");
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let backgroundColor = "#ffffff";

function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    backgroundColor = "#420042";
    changeBackgroundColor(backgroundColor);
  }
});

document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.altKey && event.key === "s") {
    backgroundColor = "#303030";
    changeBackgroundColor(backgroundColor);
  }
});

document.addEventListener("keyup", function(event) {
  backgroundColor = "#ffffff";
  changeBackgroundColor(backgroundColor);
});

myButton.addEventListener("click", function() {

  ingredientsList.innerHTML = "";
  for (let i = 0; i < ingredients.length; i++) {
    const ingredient = ingredients[i];
    const li = document.createElement("li");
    li.textContent = ingredient;
    ingredientsList.appendChild(li);
  }
});
