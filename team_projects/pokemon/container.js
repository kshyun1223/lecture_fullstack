// import domInit from "./domInit.js";
import domStyling from "./styling.js";

// root 스타일링
function stylingRoot(element) {
  domStyling.size(element, "100vw", "100vh");
  domStyling.flexBox(element, "flex", "center", "center");
}

// wrap 스타일링
function stylingWrap(element) {
  domStyling.size(element, "80vw", "50vh");
  domStyling.flexBox(element, "flex", "center", "center");
  element.style.overflow = "hidden";
}

// container 스타일링
function stylingContainer(element) {
  domStyling.size(element, "80vw", "50vh");
  domStyling.flexBox(element, "flex", "left", "center", "nowrap");
}

// 요소 동적 생성
function createElem(parent, element) {
  const elem = document.createElement(element);
  parent.appendChild(elem);
}

export default {stylingRoot, stylingWrap, stylingContainer, createElem};