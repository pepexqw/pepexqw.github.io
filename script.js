// Переключение тёмной темы (можно расширить)
const btn = document.getElementById('theme-toggle');

btn.addEventListener('click', () => {
 document.body.classList.toggle('dark-theme');
});

// Можно добавить дополнительные эффекты или анимации при скролле
// Например, плавное появление элементов при прокрутке
const sections = document.querySelectorAll('.section');

const options = {
 root:null,
 rootMargin:'0px',
 threshold:.1
};

const observer = new IntersectionObserver((entries,observer) => {
 entries.forEach(entry => {
   if(entry.isIntersecting){
     entry.target.style.opacity=1; 
     entry.target.style.transform='translateY(0)';
     entry.target.style.transition='all .6s ease-out';
     observer.unobserve(entry.target);
   }
 });
}, options);

sections.forEach(section => {
 section.style.opacity=0; 
 section.style.transform='translateY(20px)';
 observer.observe(section);
});
