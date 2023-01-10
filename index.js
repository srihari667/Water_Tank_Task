const input = [0, 4, 0, 0, 0, 6, 0, 5, 0, 4];

//for creating grid

for (let i = 0; i < 70; i++) {
  document.getElementById("container").innerHTML =
    document.getElementById("container").innerHTML +
    `<div class="grid-item" id="item-${parseInt(i / 10)}-${i % 10}"></div>`;
}

//for coloring container boundaries.

input.forEach((item, index) => {
  if (item !== 0) {
    for (let i = 6, count = item; count > 0; i--, count--) {
      const element = document.getElementById(`item-${i}-${index}`);
      element.style.backgroundColor = "yellow";
    }
  }
});

//for coloring water.
var item1 = 0;
var index1 = 0;
var item2 = 0;
var index2 = 0;
input.forEach((item, index) => {
  if (item !== 0 && item1 === 0) {
    item1 = item;
    index1 = index;
  } else if (item !== 0 && item1 !== 0) {
    item2 = item;
    index2 = index;
  }
  while (item1 !== 0 && item2 !== 0) {
    var height = Math.min(item1, item2);
    for (let i = index1 + 1; i < index2; i++) {
      for (let j = 6; j > 6 - height; j--) {
        document.getElementById(`item-${j}-${i}`).style.backgroundColor =
          "blue";
      }
    }
    item1 = item2;
    index1 = index2;
    item2 = 0;
  }
});
