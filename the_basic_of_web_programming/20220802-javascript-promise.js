function hello() {

  return new Promise((resolve, reject) => {

    resolve('hello');

  });

}

hello().then((value) => {

  console.log(value);

});