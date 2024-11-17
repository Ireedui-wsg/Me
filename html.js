const menuBtn = document.querySelector('.menu');
const tab = document.querySelector('.tab');
const exitBtn = document.querySelector('.exit');

menuBtn.addEventListener('click', ()=>{
	tab.style.left="0px";
});
exitBtn.addEventListener('click', ()=>{
	tab.style.left="-700px";
	menuBtn.style.left="0px"
});
// hsla(0, 0%, 0%, 0.338)