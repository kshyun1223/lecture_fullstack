import domInit from "./domInit.js";
import domStyling from "./styling.js";
// import {stylingRoot, stylingWrap, stylingContainer} from "./container.js";
import setCarousel from "./carousel.js";
import carouselContent from "./carouselContents.js";

// root 스타일링
domStyling.size(domInit.root, "100vw", "100vh");
domStyling.flexBox(domInit.root, "flex", "center", "center");
// stylingRoot(root);

// wrap 동적 생성, 스타일링
const wrap = document.createElement('div');
domInit.root.appendChild(wrap);
wrap.id = "wrap";

domStyling.size(wrap, "80vw", "50vh");
domStyling.flexBox(wrap, "flex", "center", "center");
wrap.style.overflow = "hidden";
// stylingWrap(wrap);

// container 동적 생성, 스타일링
const container = document.createElement('div');
wrap.appendChild(container);
container.id = "container";

domStyling.size(container, "80vw", "50vh");
domStyling.flexBox(container, "flex", "left", "center", "nowrap");
// stylingContainer(container);

setCarousel();
// const carousels = document.querySelectorAll('#slide > div');
// console.log(carousels);
carouselContent();

