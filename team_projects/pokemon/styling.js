// 문서 스타일링 메소드
const domStyling = {
  size : function(element, widthValue, heightValue) {
    element.style.width = widthValue;
    element.style.height = heightValue;
  },
  color : function(element, color, backgroundColor) {
    element.style.color = color;
    element.style.backgroundColor = backgroundColor;
  },
  flexBox : function(element, display, justifyContent, alignItems, flexFlow) {
    element.style.display = display;
    element.style.justifyContent = justifyContent;
    element.style.alignItems = alignItems;
    element.style.flexFlow = flexFlow;        
  },
  font : function(element, fontFamily, fontSize) {
    element.style.fontFamily = fontFamily;
    element.style.fontSize = fontSize;
  },
  border : function(element, border, borderRadius) {
    element.style.border = border;
    element.style.borderRadius = borderRadius;
  },
  cursor : function(element, cursor) {
    element.style.cursor = cursor;
  },
  text : function(element, textContent) {
    element.textContent = textContent;
  }
}
export default domStyling;