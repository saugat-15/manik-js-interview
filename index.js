const btn = document.querySelector('.btn');
const slideText = document.querySelector('.initial');


btn.addEventListener('click', () => {
   
    slideText.classList.toggle('active-text');
    btn.classList.toggle('active-btn')
    
})