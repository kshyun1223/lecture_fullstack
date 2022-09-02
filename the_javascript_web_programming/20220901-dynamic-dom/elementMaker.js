export default function elementMaker(tagName, textNode) {
  let element = [];
  let temp = `<${tagName}>${textNode}</${tagName}>`;
  element.push(temp);
  return element.join('');
}
