// * elementMaker.js
/* export default */ function elementMaker(tagName, textNode) {
  let element = [];
  let temp = `<${tagName}>${textNode}</${tagName}>`;
  element.push(temp);
  return element.join('');
}

// * moreElement.js
/* import elementMaker from "./elementMaker.js"; */
export default function moreElement() {
  let temp = [];
  for(let i =0; i < 5; i++) {
    let elem = elementMaker('section', `hello-${i + 1}`); 
    temp.push(elem);
    // console.log('hello');
  }
  return temp.join('');
};

// * main.js
/* import elementMaker from "./elementMaker.js";
import moreElement from "./moreElement.js"; */
const root = document.getElementById('root');

const rootArea = `${elementMaker("div", moreElement())}`;

root.innerHTML = rootArea;