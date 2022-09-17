import clickEven from "./clickEven.js"

window.addEventListener('load', () => {
  const h1 = document.querySelector('h1');
  console.log(h1);
  clickEven(h1, "black");
});

/* 리터럴 */
// h1.addEventListener('click',() => {
//   h1.style.color = "cadetblue";
// });

/* 함수 */
// function clickEven(element, color) {
//   element.addEventListener('click', () => {
//     this.style.color = color;
//   });
// }