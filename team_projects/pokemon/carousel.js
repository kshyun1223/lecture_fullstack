import domInit from "./domInit.js";
import domStyling from "./styling.js";

// 캐러셀 동적 생성
export default function setCarousel() {
  for(i = 0; i < domInit.slideItem.length; i++) {
    carousel = document.createElement('div');
    domStyling.size(carousel, box.clientWidth/5 + "px", box.style.height );
    domStyling.flexBox(carousel, "flex", "center", "center", "column");
    carousel.style.padding = "10px";
    slide.appendChild(carousel);
  }
}
// setCarousel();
const carousels = document.querySelectorAll('#slide > div');
console.log(carousels);

