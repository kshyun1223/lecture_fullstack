import elementMaker from "./elementMaker.js";
import moreElement from "./moreElement.js";


const root = document.getElementById('root');


const rootArea = `${elementMaker("div", moreElement())}`;

root.innerHTML = rootArea;