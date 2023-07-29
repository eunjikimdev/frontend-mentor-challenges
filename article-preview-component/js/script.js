var shareBtn = document.querySelector(".share-button");
var snsShareCard = document.querySelector(".share-option");

shareBtn.addEventListener("click", () => {
  shareBtn.classList.toggle("active");
  snsShareCard.classList.toggle("active");
});
