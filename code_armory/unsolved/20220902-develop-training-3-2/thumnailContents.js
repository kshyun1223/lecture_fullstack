import trainingData from "./contents.js";
import elemSet from "./element.js";

// thumnail contents
function thumnailText(parentElem) {
  let elem = [];
  let dot = elemSet("div","");
  let author = elemSet("p", trainingData.thumnailData[0].author);
  let summary = elemSet("p", trainingData.thumnailData[0].summary);
  let title = elemSet("h1", trainingData.thumnailData[0].title);
  let paragraphOne = elemSet("div", dot + author);
  let paragraphTwo = elemSet("div", dot + summary);
  let text = elemSet("div", title + paragraphOne + paragraphTwo);
  elem.push(text);
  elem.join('');
  for(let i = 0; i < parentElem.length; i++) {
    if(i %2 === 1) {
      parentElem[i].innerHTML = elem;
    }
  }
}

// text 삽입
function titleStyle(element) {
  for(let i = 0; i < element.length; i++) {
    element[i].textContent = trainingData.thumnailData[i].title;
    element[i].style.fontSize = "10px";

  }
}

function paragraphStyle(element) {
  let counter = 0;
  for(let i = 0; i < trainingData.thumnailData.length; i++) {
    element[i + counter].style.fontSize = "5px";
    element[i + counter + 1].style.fontSize = "1px";
    element[i + counter].textContent = trainingData.thumnailData[i].author;
    element[i + counter + 1 ].textContent = trainingData.thumnailData[i].summary;
    counter = counter + 1;
    console.log(element[i].textContent);
  }
}

function dot(element) {
  for(let i = 0; i < element.length; i++) {
    element[i].style.width = "5px";
    element[i].style.height = "5px";
    element[i].style.backgroundColor = trainingData.colorAssets[1];
  }
}

function textStyle(element) {
  for(let i = 0; i < element.length; i++) {
    element[i].style.display = "flex";
    element[i].style.justifyContent = "start";
    element[i].style.alignItems = "center";
    element[i].style.flexDirection = "row";
    element[i].style.margin = "1px";
  }
}

export {thumnailText, titleStyle, paragraphStyle, dot, textStyle};
