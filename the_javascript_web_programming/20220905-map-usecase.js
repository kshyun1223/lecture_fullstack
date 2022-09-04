const nameArray = ['피카츄', '라이츄', '파이리', '꼬부기', '버터풀'];
const tagMake = (tagName, textNode) => `<${tagName}>${textNode}</${tagName}>`;
const ulWrap = tagMake('ul', nameArray.map((value) => tagMake('li', value)).join(''));