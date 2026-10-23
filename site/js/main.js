const btn=document.querySelector('.menu-btn'),menu=document.getElementById('menu');
btn.addEventListener('click',()=>{const a=menu.classList.toggle('aberto');btn.setAttribute('aria-expanded',a)});
