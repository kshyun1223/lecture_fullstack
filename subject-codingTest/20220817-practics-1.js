// console.log('멍멍');

// var yeahchan = '앞머리';
// var gunsoo = '앞머리';

// console.log(yeahchan[0]);

// console.log(sangho.age);

// if(sangho.age >= 85) {
//   console.log('영양제 챙겨드세요');
// } else {
//   console.log('젊네');
// }

// if(sangho.name === "이상호") {
//   console.log('영양제 챙겨드세요');
// } else {
//   console.log('젊네');
// }

if(!!(sangho.name === '이상호')) {
  console.log('영양제 챙겨드세요');
} else {
  console.log('젊네');
}

var sangho = {
  name: '이상호',
  age: 85
}

var doojin = {
  name: '원두진',
  age: 135
}

if(sangho.age > doojin.age || typeof(sangho.name) === 'string') {
  console.log(sangho.name + '님이 형입니다.');
} else {
  console.log(doojin.name + '님이 형입니다.');
}