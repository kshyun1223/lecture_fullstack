// let first = setTimeout(() => {
//   console.log('첫번째 setTimeout입니다. 3초 뒤에 실행됩니다.');
//   let second = setTimeout(() => {
//     console.log('두번째 setTimeout입니다. 2초 뒤에 실행됩니다.');
//     let third = setTimeout(() => {
//     console.log('세번째 setTimeout입니다. 1초 뒤에 실행됩니다.');
//       let fourth = setTimeout(() => {
//         console.log('네번째 그만해!!!');
//         let fifth = setTimeout(() => {
//           console.log('다섯번째 뇌절오지네!!!');
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 2000);
// }, 3000);




let test = new Promise(function(resolve, reject){
  console.log(typeof(resolve));
  console.log(typeof(reject));
  console.dir(typeof(resolve));
});
