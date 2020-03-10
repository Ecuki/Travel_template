var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n), Math.sign(n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n), 0);
}

function showSlides(n, sign = null) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  const numberText = document.querySelector(".numbertext-actual");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";

    slides[i].classList.remove("from-left");
    slides[i].classList.remove("from-right");
    slides[i].classList.remove("from-bottom");
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  if (sign < 0) {
    slides[slideIndex - 1].className += " from-left";
  } else if (sign > 0) {
    slides[slideIndex - 1].className += " from-right";
  } else if (sign == 0) {
    slides[slideIndex - 1].className += " from-bottom";
  }
  slides[slideIndex - 1].style.display = "flex";

  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
  numberText.textContent = slideIndex;
}
