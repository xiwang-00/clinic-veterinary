let linkMain =document.querySelector('#link-main');
let body = document.querySelector('body')
let overlay = document.querySelector("#overlay")
let close =document.querySelector("#close");
let menu =document.querySelector("#mini-menu")

linkMain.addEventListener('click', function(){
 body.classList.add('no-scroll')
 overlay.classList.add("open")
 menu.classList.add('opened')
});

close.addEventListener('click' ,function(){
overlay.classList.remove('open')
menu.classList.remove('opened')
body.classList.remove('no-scroll')
});
