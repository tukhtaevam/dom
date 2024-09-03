


document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const gridItems = document.querySelectorAll(".grid__item");

  function changeBackgroundColorForSite(color) {
    body.style.backgroundColor = color;
  }

  function changeBackgroundColorForGridItems(color) {
    gridItems.forEach((item) => {
      item.style.backgroundColor = color;
    });
  }

  document
    .querySelectorAll(".item1, .item2, .item3, .item4, .item5")
    .forEach((item) => {
      item.addEventListener("click", () => {
        if (item.classList.contains("item1")) {
          changeBackgroundColorForSite("red");
        } else if (item.classList.contains("item2")) {
          changeBackgroundColorForSite("yellow");
        } else if (item.classList.contains("item3")) {
          changeBackgroundColorForSite("rgb(0, 128, 255)");
        } else if (item.classList.contains("item4")) {
          changeBackgroundColorForSite("black");
        } else if (item.classList.contains("item5")) {
          changeBackgroundColorForSite("white");
        }
      });
    });

  document
    .querySelectorAll(".item-1, .item-2, .item-3, .item-4, .item-5")
    .forEach((item) => {
      item.addEventListener("click", () => {
        if (item.classList.contains("item-1")) {
          changeBackgroundColorForGridItems("red");
        } else if (item.classList.contains("item-2")) {
          changeBackgroundColorForGridItems("yellow");
        } else if (item.classList.contains("item-3")) {
          changeBackgroundColorForGridItems("rgb(0, 128, 255)");
        } else if (item.classList.contains("item-4")) {
          changeBackgroundColorForGridItems("black");
        } else if (item.classList.contains("item-5")) {
          changeBackgroundColorForGridItems("white");
        }
      });
    });
});
