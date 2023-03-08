let parent = document.querySelector(".parent");
let view = document.querySelector(".view ");
let cloze = document.querySelector(".header i");
let input = document.querySelector("input");
let button = document.querySelector(".input button ");
button.addEventListener("click", () => {
  input.select();
  navigator.clipboard.writeText(input.value);
});
cloze.addEventListener("click", () => {
  parent.classList.remove("show");
  view.style.display = "block";
});
view.addEventListener("click", () => {
  parent.classList.add("show");
  view.style.display = "none";
  input.value = "example.com/share-link";
});
