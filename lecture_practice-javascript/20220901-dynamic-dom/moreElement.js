import elementMaker from "./elementMaker.js";

export default function moreElement() {
  let temp = [];
  for(let i =0; i < 5; i++) {
    let elem = elementMaker('section', `hello-${i + 1}`); 
    temp.push(elem);
    // console.log('hello');
  }
  return temp.join('');
};