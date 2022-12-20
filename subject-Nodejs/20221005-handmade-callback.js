function yahoFunc(param) {
  if(typeof(param) === "string"){
    return param + "yaho";
  }
}

function merongFunc(param){
  if(typeof(param) === "string"){
    return param + "merong";
  }
}

/* 콜백을 사용하여 개선 */
function handMade(arg, callback){
  // if(typeof(test) === "string" && typeof callback === "function"){
    // console.log(typeof test);
    // console.log(typeof callback);
    console.log(callback(arg));
  }
// }

handMade("메롱, ", merongFunc);
handMade("야호, ", yahoFunc);
