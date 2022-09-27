let first = setTimeout(() => {
  console.log('첫번째 setTimeout입니다. 3초 뒤에 실행됩니다.');
}, 3000);

let second = setTimeout(() => {
  console.log('두번째 setTimeout입니다. 2초 뒤에 실행됩니다.');
}, 2000);

let third = setTimeout(() => {
  console.log('세번째 setTimeout입니다. 1초 뒤에 실행됩니다.');
}, 1000);