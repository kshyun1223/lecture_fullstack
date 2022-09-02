import trainingData from "./contents.js";

function headerStyle(element) {
  element.style.width = "100vw";
  element.style.height = "5vh";
  element.style.color = trainingData.colorAssets[1];
  element.style.display = "flex";
  element.style.justifyContent = "center";
  element.style.alignItems = "center";
  element.style.position = "relative";
}

function ulStyle(element) {
  element.style.width = "100vw";
  element.style.height = "5vh";
  element.style.display = "flex";
  element.style.justifyContent = "center";
  element.style.alignItems = "center";
}

function liStyle(element) {
  for(let i = 0; i < element.length; i++) {
    element[i].style.listStyleType = "none";
    element[i].textContent = trainingData.header[i];
    element[i].style.padding = "10px";
  }
}

function hrStyle(element) {
  element.style.width = "90vw";
  element.style.height = "1px";
  element.style.color = trainingData.colorAssets[1];
  element.style.position = "absolute";
  element.style.top = "5vh";
}

export {headerStyle, ulStyle, liStyle, hrStyle};