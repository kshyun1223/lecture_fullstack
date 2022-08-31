function kdt(name, glass, payment) {
  this.id = name;
  this.b = glass;
  this.c = payment;
}

const members = [];
for(let i=0; i<5; i++) {
  members.push(new kdt(i+1, "hello", "bye"))
}

console.log(members);