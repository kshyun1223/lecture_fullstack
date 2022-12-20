const hamsu = (argOne, argTwo, callback) => {
  const diy = argOne + argTwo // 고정하고 싶은 부분
  return console.log(callback(diy)) // 결과값
}

hamsu(1,2, function(callback) {
  return callback + " 조건식" // 바꾸고 싶은 부분
})

