// 클릭이벤트 
let counter = 1; 
const carouselSize = carousels[0].clientWidth;

nextBtn.addEventListener('click', function(){
  if(counter >= carousels.length-1) return;
  slide.style.transition = "transform 0.4s ease-in-out";
  counter = counter + 1;
  slide.style.transform = 'translateX(' + (-carouselSize * counter) + 'px)';
});

prevBtn.addEventListener('click', function(){
  if(counter <= 0) return;
  slide.style.transition = "transform 0.4s ease-in-out";
  counter = counter - 1;
  slide.style.transform = 'translateX(' + (-carouselSize * counter) + 'px)';
});