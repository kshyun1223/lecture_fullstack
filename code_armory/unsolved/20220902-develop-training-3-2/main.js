import elemSet from "./element.js";
import childElemSet from "./childElement.js";
import {thumnailSet, thumnailStyle, thumnailContainer} from "./thumnail.js";
// import trainingData from "./contents.js";
import {headerStyle, ulStyle, liStyle, hrStyle} from "./header.js";
import {mainStyle, sectionStyle} from "./mainSection.js";
// import thumnailData from "./thumnailContents.js";
import trainingData from "./contents.js";
import {thumnailText, titleStyle, paragraphStyle, dot, textStyle} from "./thumnailContents.js";
import displayImg from "./image.js";
import {drawTri, triangleStyle} from "./bluesection.js";

// root initailize
const root = document.getElementById('root');
console.dir(root);
root.style.margin = 0;
root.style.padding = 0;
root.style.boxSizing = "border-box";
root.style.width = "100vw";
root.style.height = "100vh";
root.style.backgroundColor = trainingData.colorAssets[0];
root.style.color = trainingData.colorAssets[1];

// header, main 요소 동적 생성
const headerSet = elemSet("header", 
elemSet("hr", 
elemSet("ul", 
childElemSet("li", 6))));

const mainSet = elemSet("main", 
childElemSet("section", 3, ""));

root.innerHTML = headerSet + mainSet;

// thumnail 동적 생성
const header = document.querySelector('header');
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');
const hr = document.querySelector('hr');
const main = document.querySelector('main');
const section = document.querySelectorAll('section');

console.log(section);

const sectionOne = thumnailSet(3);
section[0].innerHTML = sectionOne;
const sectionThree = thumnailSet(1);
section[2].innerHTML = sectionThree;


// header 스타일링
headerStyle(header);
ulStyle(ul);
liStyle(li);
hrStyle(hr);

// main, section 스타일링
mainStyle(main);
sectionStyle(section);

// thumnail 스타일링
const article = document.querySelectorAll('article');
const div = document.querySelectorAll('article > div');
console.log(div);
thumnailStyle(article);
thumnailContainer(div);
thumnailText(div);

const h1 = document.querySelectorAll('h1');
console.log(h1);
const p = document.querySelectorAll('div > div > p')
console.log(p);

titleStyle(h1);
paragraphStyle(p);
console.log(trainingData.thumnailData.length);

const imgs = document.querySelectorAll('img');
console.log(imgs);
for(let i = 0; i < trainingData.imageData.length; i++) {
  displayImg(trainingData.imageData[i], '150', '200', 'img', imgs[i]);
}

// 삼각형 그리기
const sectionTwo = drawTri();
section[1].innerHTML = sectionTwo;
const tri = document.querySelector('section > div');
triangleStyle(tri);
console.dir(tri.style);

const title = document.querySelectorAll('div > div > div, p')
const dots = document.querySelectorAll('div > div > div > div');

dot(dots);
textStyle(title);