function mainStyle(element) {
  element.style.width = "100vw";
  element.style.height = "90vh";
  element.style.display = "flex";
  element.style.justifyContent = "center";
  element.style.alignItems = "center";
}

function sectionStyle(element) {
  for(let i = 0; i < element.length; i++) {
    element[i].style.height = "90vh";
    element[i].style.display = "flex";
    element[i].style.justifyContent = "center";
    element[i].style.alignItems = "center";
    element[i].style.flexDirection = "column";
  }
  element[0].style.width = "60vw";
  element[1].style.width = "10vw";
  element[2].style.width = "30vw";
}

export {mainStyle, sectionStyle};