 // Получаем элементы слайдера
 const products__cards = document.querySelector('.products__cards');
 const cards = document.querySelectorAll('.card');
 const prevBtn = document.querySelector('.prev-btn');
 const nextBtn = document.querySelector('.next-btn');
 
 let cardIndex = 0;
 const cardWidth = cards[0].clientWidth;
 
 // Устанавливаем начальное положение слайдера
 products__cards.style.transform = `translateX(${-cardIndex * cardWidth}px)`;
 
 // Функция для переключения слайдов вперед
 function nextSlide() {
     if (cardIndex >= cards.length - 1) return;
     cardIndex++;
     products__cards.style.transform = `translateX(${-cardIndex * cardWidth}px)`;
 }
 
 // Функция для переключения слайдов назад
 function prevSlide() {
     if (cardIndex <= 0) return;
     cardIndex--;
     products__cards.style.transform = `translateX(${-cardIndex * cardWidth}px)`;
 }
 
 // Обработчики событий для кнопок "Вперед" и "Назад"
 nextBtn.addEventListener('click', nextSlide);
 prevBtn.addEventListener('click', prevSlide);