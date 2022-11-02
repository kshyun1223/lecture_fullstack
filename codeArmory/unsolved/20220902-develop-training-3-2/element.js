export default function elemSet(tagName, textNode) {
  let elem = [];
  let temp = `<${tagName}>${textNode}</${tagName}>`;
  elem.push(temp);
  return elem.join('');
}