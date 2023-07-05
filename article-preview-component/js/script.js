var shareBtn = document.querySelector(".share");
var snsShareCard = document.querySelector(".snsShare");

function clickShareBtn(event) {
  event.preventDefault();
  const activeClass = "active";
  if (snsShareCard.classList.contains(activeClass)) {
    snsShareCard.classList.remove(activeClass);
  } else {
    snsShareCard.classList.add(activeClass);
  }
}

shareBtn.addEventListener("click", clickShareBtn);
