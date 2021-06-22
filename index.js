let item;
document.querySelectorAll(".item").forEach((elem) => {
  elem.addEventListener("dragstart", (e) => handleDragStart(e, elem));
  elem.addEventListener("dragend", (e) => handleDragEnd(e, elem));
});

document.querySelectorAll(".section").forEach((elem) => {
  elem.addEventListener("dragover", (e) => handleDragOver(e, elem));
  //   elem.addEventListener("drop", (e) => handleDrop(e, elem));
});
let timeouts = [];
function handleDragOver(e, item) {
  e.preventDefault();
  let draggingItem = document.querySelector(".dragging");
  let allItems = item.querySelectorAll(".item");
  let offset = e.clientY - draggingItem.offsetTop;
  for (let i = 0; i < allItems.length; i++) {
    if (allItems[i].offsetTop - offset > e.clientY) {
      item.insertBefore(draggingItem, allItems[i]);
      return;
    }
  }
  item.appendChild(draggingItem);
}

function handleDragStart(e, item) {
  item.classList.add("dragging");
}

function handleDragEnd(e, item) {
  item.classList.remove("dragging");
}
