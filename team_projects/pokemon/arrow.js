// 화살표 버튼 생성, 스타일링
const prevBtn = document.createElement('button');
const nextBtn = document.createElement("button"); 

function arrowStylingLeft(element) {
  element.style.position = "absolute";
  element.style.left = "5vh";
  element.style.top = "25vw";
  element.content = "";
  element.style.width = "50px";
  element.style.height = "50px";
  element.style.border = "none";
  element.style.backgroundColor = "#fff";
  element.style.borderTop = "5px solid #333";
  element.style.borderRight = "5px solid #333";
  element.style.transform = "rotate(225deg)";
}
function arrowStylingRight(element) {
  element.style.position = "absolute";
  element.style.left = "155vh";
  element.style.top = "25vw";
  element.content = "";
  element.style.width = "50px";
  element.style.height = "50px";
  element.style.border = "none";
  element.style.backgroundColor = "#fff";
  element.style.borderTop = "5px solid #333";
  element.style.borderRight = "5px solid #333";
  element.style.transform = "rotate(45deg)";
}

console.dir(prevBtn);
arrowStylingLeft(prevBtn);
arrowStylingRight(nextBtn);

domInit.root.appendChild(prevBtn);
domInit.root.appendChild(nextBtn);