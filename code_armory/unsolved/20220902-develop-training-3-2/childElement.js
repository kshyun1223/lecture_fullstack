import elemSet from "./element.js";

export default function childElemSet(tagName, count, textNode) {
  let childElem = [];
  for(let i = 0; i < count; i++) {
    let temp = elemSet(tagName, textNode); 
    childElem.push(temp);
  }
  return childElem.join('');
};