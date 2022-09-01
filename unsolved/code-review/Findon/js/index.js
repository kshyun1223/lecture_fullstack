// width and height 함수
function widthandheight(element, width, height) {
  element.style.width = width;
  element.style.height = height;
}

//position setting함수
function positionSetting(element, left, top) {
  element.style.left = left;
  element.style.top = top;
  element.style.position = 'absolute';
}

//font setting함수
function fontSetting(element, size, weight, li_he, color) {
  element.style.fontSize = size;
  element.style.fontStyle = 'nomal';
  element.style.fontWeight = weight;
  element.style.lineHeight = li_he;
}

//  body --> padding. margin, box-sizing
const body = document.body;
console.log(body);
body.style.padding = 0;
body.style.margin = 0;
body.style.boxSizing = 'border-box';

// root생성, id연결 및 가로세로,배경색
var root = document.createElement('div');
root.setAttribute('id', 'root');
body.appendChild(root);
widthandheight(root, '100vw', '100vh');
root.style.backgroundColor = '#F5F5F5';

//sequence생성, id연결, root와 자식관계연결, 가로세로&속성
const sequence = document.createElement('div');
sequence.setAttribute('id', 'sequence');
sequence.innerHTML = '#1 sequence';
root.appendChild(sequence);
console.log(sequence);
positionSetting(sequence, '1552px', '29px');
fontSetting(sequence, '24px', '400', '29px');
sequence.style.color = 'rgba(0,0,0,0.3)';
sequence.style.zIndex = '1500';

//button생성, id연결, root와 자식관계연결, 가로세로&속성
let btn = document.createElement('button');
btn.setAttribute('id', 'btn');
btn.innerHTML = 'click';
root.appendChild(btn);

console.log(btn);
widthandheight(btn, '73px', '73px');
console.log(btn.width);
positionSetting(btn, '828px', '522px');
fontSetting(btn, '24px', '400', '29px');
btn.style.backgroundColor = '#333333';
btn.style.borderRadius = '93.5px';
btn.style.color = '#ffffff';
btn.style.zIndex = '1500';

//particle 생성, id연결, root와 자식관계연결, 가로세로&속성
const particles = document.createElement('particles');
particles.setAttribute('id', 'particles');
root.appendChild(particles);
widthandheight(particles, '100vw', '100vh');
particles.style.transformStyle = 'preserve-3d';
particles.style.overflow = 'hidden';
particles.style.animation = 'move 10s infinite ease-in-out alternate';

///장면전환 count변수 선언
let count = 0;
let isSwitch = true;
btn.addEventListener('click', function () {
  btn.style.transition = '0.5s';
  //화면에서 사라지기
  if (isSwitch === true) {
    isSwitch = false;
    btn.style.backgroundColor = '#F5F5F5';
    btn.textContent = ' ';
    btn.style.border = '0px none #f5f5f5';
  } else {
    //화면에서 등장
    if (count === 0) {
      isSwitch = true;
      count++;
      console.log(count);
      btn.innerText = 'if all you have a hammer, everything looks like a nail';
      btn.style.backgroundColor = '#F5F5F5';
      btn.style.border = '0px none #f5f5f5';
      btn.style.color = '#333333';
      widthandheight(btn, '779px', '39px');
      fontSetting(btn, '32px', '400', '39px');
      positionSetting(btn, '475px', '539px');
      sequence.innerText = '#2 sequence';
    } else if (count === 1) {
      isSwitch = true;
      count++;
      console.log(count);
      btn.innerText = '가진것이 망치뿐이면, 모든 것이 못으로 보인다.';
      btn.style.backgroundColor = '#F5F5F5';
      btn.style.border = '0px none #f5f5f5';
      btn.style.color = '#333333';
      widthandheight(btn, '700px', '39px');
      fontSetting(btn, '32px', '400', '39px');
      positionSetting(btn, '581px', '539px');
      sequence.innerText = '#3 sequence';
    } else if (count === 2) {
      isSwitch = true;
      count = 0;
      widthandheight(btn, '73px', '73px');
      positionSetting(btn, '828px', '522px');
      fontSetting(btn, '24px', '400', '29px');
      btn.style.backgroundColor = '#333333';
      btn.style.borderRadius = '93.5px';
      btn.style.color = '#ffffff';
      btn.innerText = 'click';
      sequence.innerText = '#1 sequence';
    }
  }
});

//효과 색상, 경계선 배열
let border = ['50%', '0%'];
let colors = ['#ff6b6b', '#ffe66d', '#4472ca'];

//particle효과 크기, 모양 등 지정
function createParticle(event) {
  let x = event.clientX;
  let y = event.clientY;
  let color = Math.floor(Math.random() * 3);

  var div = document.createElement('div');
  div.style.position = 'absolute';
  div.style.marginLeft = x + 'px';
  div.style.marginTop = y + 'px';
  div.style.width = '8px';
  div.style.borderTop = '5px solid transparent';
  div.style.borderRight = '5px solid transparent';
  div.style.borderLeft = '5px solid transparent';
  div.style.borderBottom = '10px solid ' + colors[color];
  div.style.animation = 'move 5s ease-in infinite';
  particles.appendChild(div);
  setTimeout(function () {
    div.remove();
  }, 5000);
}

//particle가져오기
function getParticles() {
  let np = document.documentElement.clientWidth / 40;
  particles.innerHTML = '';
  for (let i = 0; i < np; i++) {
    let w = document.documentElement.clientWidth;
    let h = document.documentElement.clientHeight;
    let rndw = Math.floor(Math.random() * w) + 1;
    let rndh = Math.floor(Math.random() * h) + 1;
    let widthpt = Math.floor(Math.random() * 8) + 5;
    let opty = Math.floor(Math.random() * 4) + 1;
    let anima = Math.floor(Math.random() * 12) + 8;
    let bdr = Math.floor(Math.random() * 2);
    let color = Math.floor(Math.random() * 3);

    let div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.marginLeft = rndw + 'px';
    div.style.marginTop = rndh + 'px';
    div.style.width = widthpt + 'px';
    div.style.height = widthpt + 'px';
    div.style.opacity = opty;
    div.style.backgroundColor = colors[color];
    div.style.borderRadius = border[bdr];
    div.style.animation = 'move' + anima + 's ease-in infinite';
    particles.appendChild(div);
  }
}
function main(event) {
  getParticles();
  //click하면 root에 사다리꼴 모양 새로운 생성
  root.addEventListener('click', createParticle);
}

window.addEventListener('resize', main);
window.addEventListener('load', main);
