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

function handMade(test, callback){
  if(typeof(test) === "string" && typeof callback === "function"){
    console.log(typeof test);
    console.log(typeof callback);
    console.log(callback(test));
  }
}

handMade("yo 나는 이렇게 말하지 ,", merongFunc);
handMade("yo 나는 이렇게 말하지 ,", yahoFunc);
