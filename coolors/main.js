const btn = document.getElementById("generateBtn");
const colorDiv = document.getElementsByClassName("color-div");

let changeColors = () => {
  for (i = 0; i < colorDiv.length; i++) {
    let hex_color = (Math.random() * 0xfffff * 1000000)
      .toString(16)
      .slice(0, 6);
    colorDiv[i].style.backgroundColor = "#" + hex_color;
    colorDiv[i].textContent = hex_color;
  }
};

btn.addEventListener("click", changeColors);

