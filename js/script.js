/*function randomRange(myMin, myMax) {
  // Only change code below this line
  
  return Math.floor(Math.random() * (myMax - myMin+1) ) + myMin;
  // Only change code above this line
}

var n = [randomRange(1,9),randomRange(1,9),randomRange(1,9),randomRange(1,9)];


var x = n[0].toString() +n[1]+n[2]+n[3];
console.log(x) 
*/
AOS.init();

$(document).ready(function(){
         
        
  $('#mycarousel').carousel({ interval: false});

$('#carouselBtn').click(function(){
       $('#mycarousel').carousel({ interval: 2000});
  
   if ($('#carouselBtn').children('i').hasClass('fa-pause')){
       $('#mycarousel').carousel('pause');
       $('#carouselBtn').children('i').removeClass('fa-pause');
       $('#carouselBtn').children('i').addClass('fa-play');
   }
   else if ($('#carouselBtn').children('i').hasClass('fa-play')){
       $('#mycarousel').carousel('cycle');
       $('#carouselBtn').children('i').removeClass('fa-play');
       $('#carouselBtn').children('i').addClass('fa-pause');
   }else{
       alert('Code error')
   }


});

 $('#mycarousel').carousel('pause');


})


function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}



// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   var captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }

