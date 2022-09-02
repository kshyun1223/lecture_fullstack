import elemSet from "./element.js";

function drawTri(){
  let elem = [];
  let triangle = elemSet("div", "");
  elem.push(triangle);
  return elem.join('');
}

function triangleStyle(element) {
  element.style.width = "0px";
  element.style.height = "0px";
  element.style.borderBottom = "calc( 10px * 1.732 ) solid #333";
  element.style.borderLeft = "10px solid transparent";
  element.style.borderRight = "10px solid transparent";
  element.style.transform = "rotate(90deg)";
}

export {drawTri, triangleStyle};