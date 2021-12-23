const menuHamber=document.querySelector('.menu-hamber');
const menu=document.querySelector('.menu');
menuHamber.addEventListener("click",()=>{
 if(menu.classList.contains("active")){
 	menu.classList.remove("active")
 	menuHamber.classList.remove('active')
 }
 else{
 	menu.classList.add("active")
 	menuHamber.classList.add('active')
 }
})