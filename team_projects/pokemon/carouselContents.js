import domInit from "./domInit.js";
import domStyling from "./styling.js";

// 캐러셀 컨텐츠 부분 
export default function carouselContent() {
  for(i = 0; i < domInit.slideItem.length; i++) {
    card = document.createElement('div');
    title = document.createElement('div');
    text = document.createElement('div');
    domStyling.size(card, box.clientWidth/5 + "px", box.clientHeight/2 + "px");
    card.style.backgroundColor = domInit.colorList[i];
    domStyling.text(title, domInit.slideItem[i]);
    domStyling.text(card, domInit.slideNumber[i]);
    domStyling.size(title, box.clientWidth/5 + "px", box.clientHeight/10 + "px");
    domStyling.text(title, domInit.slideItem[i]);
    domStyling.size(text, box.clientWidth/5 + "px", box.clientHeight/4 + "px");
    domStyling.text(text, domInit.text);
    text.style.fontSize = "0.8rem";
    carousels[i].appendChild(card);
    carousels[i].appendChild(title);
    carousels[i].appendChild(text);
  }
}
// carouselContent();