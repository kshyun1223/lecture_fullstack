const first = {
  one : 1, 
  two : 2,
  makeString: function(){
    return this.one + ' ' + this.two;
  }
}

console.log(first.makeString());
console.log(typeof first.makeString());

const second = {
  one : 3,
  two : 4, 
  makeString: function() {
    return this.one + ' ' + this.two;
  }
}

console.log(second.makeString());
console.log(typeof second.makeString());

const third = {
  one : 5,
  two : 6, 
}

third.prototype.makeString = function(){
  return this.one +'' + this.two; 
}

console.log(third.makeString());