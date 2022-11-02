const pokemon = ["피카츄", "라이츄", "파이리", "꼬부기"]

function virtualRouter(string) {
  switch(string) {
    case "피카츄":
      return {
        statusCode : 200,
        writeName:"피카츄",
        endName:"전기",
      }
      break;
    case "라이츄":
      return {
        statusCode : 200,
        writeName : "라이츄",
        endName : "전기",
      }
      break;
    case "파이리":
      return {
        statusCode : 200,
        writeName : "파이리",
        endName : "불",
      }
      break;
    case "꼬부기":
      return {
        statusCode : 200,
        writeName : "꼬부기",
        endName : "물",
      }
      break;
    default:
      return {
        statusCode : 404,
        writeName : "야도란",
        endName : "에스퍼",
      }
      break;
  }
}

pokemon.forEach((urlElement) => {
  virtualRouter(urlElement);
});