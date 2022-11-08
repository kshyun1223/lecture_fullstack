import testComponent from './20221108-export-typescript';

function a(plusParameter:number){
  return plusParameter + testComponent(4, 5);
}

console.log(a(50));