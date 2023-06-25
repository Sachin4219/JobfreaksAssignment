const buttons = document.querySelectorAll(".sidebarElement");
const contentElements = document.querySelectorAll(".content");
var active = 0;

function selectHandler(idx) {
  contentElements[active].style.display = "none";
  contentElements[idx].style.display = "flex";
  active = idx;
}

buttons.forEach((element, index) => {
  element.addEventListener("click", () => selectHandler(index));
});
