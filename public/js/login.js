
const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('next-btn');
const skipBtn = document.getElementById('skip-btn');

let currentSlide = 0;

nextBtn.addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide++;
  
  if (currentSlide < slides.length) {
    slides[currentSlide].classList.add('active');
  } else if (currentSlide === slides.length){
    window.location.href = "https://us-east-1xw4lugldc.auth.us-east-1.amazoncognito.com/login?client_id=68ea3udqj0n9pd5eufmkrgd9d9&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Folalekanogundimu-4om9.vercel.app%2F"; // Redirect to Cognito UI
  }
});

skipBtn.addEventListener('click', () => {
  window.location.href = "https://us-east-1xw4lugldc.auth.us-east-1.amazoncognito.com/login?client_id=68ea3udqj0n9pd5eufmkrgd9d9&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Folalekanogundimu-4om9.vercel.app%2F";
});




