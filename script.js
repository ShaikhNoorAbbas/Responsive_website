window.onload = function () {
  document.getElementById("loader").style.display = "none";
  document.getElementById("main").style.display = "block";
};
let docTitle = document.title;
console.log(docTitle);
window.addEventListener("blur", () => {
  document.title = "Come Back To Website :( ";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});
