function me(name, age, feature, now) {
  this.id = name;
  this.age = age;
  this.feature = feature;
  this.now = now;
  }

const seunghyun = [];
for(let i=0; i<5; i++) {
  seunghyun.push(new me("댕댕이", "8", "커여움", "졸림"));
}
console.log(seunghyun);
