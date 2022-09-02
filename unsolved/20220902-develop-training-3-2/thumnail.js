import elemSet from "./element.js";
import childElemSet from "./childElement.js";
// import trainingData from "./contents.js";

function thumnailSet(count) {
  let thumnail = [];
  for(let i = 0; i < count; i++) {
    let imgPart = elemSet("div", childElemSet("img", 1, ""));
    let textPart = elemSet("div", childElemSet("div", 3, ""));
    let article = elemSet("article", imgPart+textPart);
    thumnail.push(article);
  }
  return thumnail.join('');
}

function thumnailStyle(element) {
  for (let i = 0; i < element.length; i++) {
    element[i].style.width = "80%";
    element[i].style.display = "flex";
    element[i].style.justifyContent = "center";
    element[i].style.alignItems = "center";
    // element[i].style.border = "1px solid #333";
    element[i].style.margin = "10px";
  }
}

function thumnailContainer(element) {
  for (let i = 0; i < element.length; i++) {
    element[i].style.display = "flex";
    element[i].style.justifyContent = "center";
    element[i].style.alignItems = "center";
    element[i].style.flexDirection = "column";
    element[i].style.flex = "wrap";
    element[i].style.padding = "10px";
  }
}

function thumnailContents(element) {
  for (let i = 0; i < element.length; i++) {
    element[i].style.display = "flex";
    element[i].style.justifyContent = "center";
    element[i].style.alignItems = "center";
    element[i].style.flexDirection = "column";
    element[i].style.flex = "wrap";
    element[i].style.padding = "10px";
  }
}

export {thumnailSet, thumnailStyle, thumnailContainer, thumnailContents};